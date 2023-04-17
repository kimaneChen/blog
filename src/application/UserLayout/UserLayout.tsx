import { FC, ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '@/application/Layout'
import classNames from 'classnames'
import Navigation from './components/Navigation'

export enum Size {
  Large,
  Default,
}

interface Props {
  children: ReactNode
  className?: string
  size?: Size
}

const UserLayout: FC<Props> = ({ children, className = undefined, size = Size.Default }) => {
  const { data: session } = useSession()

  return (
    <Layout>
      {session ? (
        <>
          <Navigation />
          <div
            className={classNames(
              'mt-8',
              'md:mt-12',
              'mb-[100px]',
              'xl:mb-[120px]',
              'mx-6',
              'xl:mx-auto',
              size === Size.Large && ['max-w-container'],
              size === Size.Default && ['max-w-[1140px]'],
              className
            )}
          >
            {children}
          </div>
        </>
      ) : (
        'Log In to Operate'
      )}
    </Layout>
  )
}

export default UserLayout

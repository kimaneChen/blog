import { FC, ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import Header from '@/application/Header'
import Footer from '@/application/Footer'
import classNames from 'classnames'
import Navigation from './components/Navigation'

interface Props {
  children: ReactNode
  className?: string
}

const UserLayout: FC<Props> = ({ children, className = undefined }) => {
  const { data: session } = useSession()

  return (
    <>
      <Header />
      {session ? (
        <>
          <Navigation />
          <div
            className={classNames('xl:max-w-[1140px]', 'pt-12', 'pb-[120px]', 'mx-auto', className)}
          >
            {children}
          </div>
        </>
      ) : (
        `Log In to Operate`
      )}
      <Footer />
    </>
  )
}

export default UserLayout

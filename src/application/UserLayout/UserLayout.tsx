import { FC, ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import Header from '@/components/Header'
import classNames from 'classnames'
import Navigation from './components/Navigation'

interface Props {
  children: ReactNode
  className?: string
}

const UserLayout: FC<Props> = ({ children, className }) => {
  const { data: session } = useSession()

  if (!session) return null

  return (
    <>
      <Header />
      <Navigation />
      <div className={classNames('max-w-[1300px]', 'mx-auto', className)}>{children}</div>
    </>
  )
}

export default UserLayout

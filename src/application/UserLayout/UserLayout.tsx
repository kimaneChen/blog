import { FC, ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import Header from '@/application/Header'
import Navigation from './components/Navigation'

interface Props {
  children: ReactNode
}

const UserLayout: FC<Props> = ({ children }) => {
  const { data: session } = useSession()

  if (!session) return null

  return (
    <>
      <Header />
      <Navigation />
      {children}
    </>
  )
}

export default UserLayout

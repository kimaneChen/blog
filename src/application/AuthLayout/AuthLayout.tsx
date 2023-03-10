import { FC, ReactNode } from 'react'
import AuthType from '@/types/AuthType'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from './components/Header'
import Blogs from './components/Blogs'
import KeyFeatures from './components/KeyFeatures'
import Section, { Position } from './components/Section'

interface Props {
  children: ReactNode
  type: AuthType
}

const AuthLayout: FC<Props> = ({ children, type }) => {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    router.push('/')
    return null
  }

  return (
    <main>
      <div className="flex">
        <Section position={Position.Left}>
          <Header />
          <KeyFeatures />
          <Blogs />
        </Section>
        <Section position={Position.Right}>
          <h1 className="text-4xl font-medium mb-4">
            {type === AuthType.Login && `Log In`}
            {type === AuthType.SignUp && (
              <>
                Join <br />
                and Comment
              </>
            )}
          </h1>
          {children}
        </Section>
      </div>
    </main>
  )
}
export default AuthLayout

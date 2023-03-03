import { FC, ReactNode } from 'react'
import Type from '@/types/AuthType'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from './components/Header'
import Blogs from './components/Blogs'
import KeyFeatures from './components/KeyFeatures'
import Section, { Position } from './components/Section'

interface Props {
  children: ReactNode
  type: Type
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
            {type === Type.Login && `Log In`}
            {type === Type.SignUp && (
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

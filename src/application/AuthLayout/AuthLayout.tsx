import { FC, ReactNode } from 'react'
import AuthType from '@/types/AuthType'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from '@/application/Header'
import Title from './components/Title'
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
      <div className="flex flex-col md:flex-row-reverse">
        <div className="md:hidden">
          <Header />
        </div>
        <Section position={Position.Right}>
          <h1 className="text-3xl font-medium mb-4">
            {type === AuthType.Login && (
              <>
                Log In <br />
                to Chuckroo
              </>
            )}
            {type === AuthType.SignUp && (
              <>
                Join <br />
                and Comment
              </>
            )}
          </h1>
          {children}
        </Section>
        <Section position={Position.Left}>
          <div className="hidden md:block">
            <Title />
          </div>
          <KeyFeatures />
          <Blogs />
        </Section>
      </div>
    </main>
  )
}
export default AuthLayout

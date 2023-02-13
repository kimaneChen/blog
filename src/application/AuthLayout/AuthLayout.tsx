import { FC, ReactNode } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import KeyFeatures from './components/KeyFeatures'
import Section, { Position } from './components/Section'

interface Props {
  children: ReactNode
  type: Type
}

export enum Type {
  SignUp = 'SignUp',
  Login = 'Login',
}

const AuthLayout: FC<Props> = ({ children, type }) => (
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
export default AuthLayout

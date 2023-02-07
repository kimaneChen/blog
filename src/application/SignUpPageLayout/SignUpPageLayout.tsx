import { FC, ReactNode } from 'react'
import AuthLayout, { Type } from '@/application/AuthLayout'
import LegalPolicy from './components/LegalPolicy'
import ExistingAccount from './components/ExistingAccount'

export interface Props {
  children: ReactNode
}

const SignUpPageLayout: FC<Props> = ({ children }) => (
  <AuthLayout type={Type.SignUp}>
    <section>
      {children}
      <LegalPolicy />
      <ExistingAccount />
    </section>
  </AuthLayout>
)

export default SignUpPageLayout

import { FC, ReactNode } from 'react'
import AuthLayout from '@/application/AuthLayout'
import Type from '@/types/AuthType'
import LegalPolicy from './components/LegalPolicy'
import ExistingAccount from './components/ExistingAccount'

export interface Props {
  children: ReactNode
}

const SignUpPageLayout: FC<Props> = ({ children }) => (
  <AuthLayout type={Type.SignUp}>
    <section>
      {children}
      <div className="mt-12">
        <LegalPolicy />
        <ExistingAccount />
      </div>
    </section>
  </AuthLayout>
)

export default SignUpPageLayout

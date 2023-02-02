import { FC, ReactNode } from 'react'
import AuthLayout from '../AuthLayout/AuthLayout'
import Title from './components/Title'
import LegalPolicy from './components/LegalPolicy'
import ExistingAccount from './components/ExistingAccount'

export interface Props {
  children: ReactNode
}

const SignUpPageLayout: FC<Props> = ({ children }) => (
  <AuthLayout>
    <section>
      <Title />

      {children}

      <LegalPolicy />
      <ExistingAccount />
    </section>
  </AuthLayout>
)

export default SignUpPageLayout

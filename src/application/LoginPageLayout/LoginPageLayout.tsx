import { FC, ReactNode } from 'react'
import AuthLayout, { Type } from '../AuthLayout/AuthLayout'
import NoAccount from './components/NoAccount'

interface Props {
  children: ReactNode
}

const LoginPageLayout: FC<Props> = ({ children }) => (
  <AuthLayout type={Type.Login}>
    <section>
      {children}
      <NoAccount />
    </section>
  </AuthLayout>
)

export default LoginPageLayout

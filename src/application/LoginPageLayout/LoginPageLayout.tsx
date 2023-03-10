import { FC, ReactNode } from 'react'
import AuthType from '@/types/AuthType'
import AuthLayout from '@/application/AuthLayout'
import NoAccount from './components/NoAccount'

interface Props {
  children: ReactNode
}

const LoginPageLayout: FC<Props> = ({ children }) => (
  <AuthLayout type={AuthType.Login}>
    <section>
      {children}
      <NoAccount />
    </section>
  </AuthLayout>
)

export default LoginPageLayout

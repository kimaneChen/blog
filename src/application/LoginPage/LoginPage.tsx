import { NextPage } from 'next'
import LoginPageLayout from '@/application/LoginPageLayout'
import AuthButtonGroup from '@/application/AuthButtonGroup'
import AuthType from '@/types/AuthType'

const LoginPage: NextPage = () => (
  <LoginPageLayout>
    <AuthButtonGroup type={AuthType.Login} />
  </LoginPageLayout>
)

export default LoginPage

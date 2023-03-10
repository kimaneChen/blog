import LoginPageLayout from '@/application/LoginPageLayout'
import OtherOptionsButton from '@/application/OtherOptionsButton'
import { NextPage } from 'next'
import AuthType from '@/types/AuthType'
import AuthForm from '@/application/AuthForm'

const EmailLoginPage: NextPage = () => (
  <LoginPageLayout>
    <AuthForm type={AuthType.Login} />
    <OtherOptionsButton href="/login">Other Log In Options</OtherOptionsButton>
  </LoginPageLayout>
)

export default EmailLoginPage

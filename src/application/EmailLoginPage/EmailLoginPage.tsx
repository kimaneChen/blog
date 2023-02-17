import LoginPageLayout from '@/application/LoginPageLayout'
import OtherOptionsButton from '@/components/OtherOptionsButton'
import { NextPage } from 'next'
import AuthForm, { Type } from '@/application/AuthForm'

const EmailLoginPage: NextPage = () => (
  <LoginPageLayout>
    <AuthForm type={Type.Login} />
    <OtherOptionsButton href="/login">Other Log In Options</OtherOptionsButton>
  </LoginPageLayout>
)

export default EmailLoginPage

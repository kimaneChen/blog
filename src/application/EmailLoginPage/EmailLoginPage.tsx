import LoginPageLayout from '@/application/LoginPageLayout'
import OtherOptionsButton from '@/application/OtherOptionsButton'
import { NextPage } from 'next'
import Type from '@/types/AuthType'
import AuthForm from '@/application/AuthForm'

const EmailLoginPage: NextPage = () => (
  <LoginPageLayout>
    <AuthForm type={Type.Login} />
    <OtherOptionsButton href="/login">Other Log In Options</OtherOptionsButton>
  </LoginPageLayout>
)

export default EmailLoginPage

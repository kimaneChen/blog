import SignUpPageLayout from '@/application/SignUpPageLayout'
import { NextPage } from 'next'
import OtherOptionsButton from '@/application/OtherOptionsButton'
import AuthForm from '@/application/AuthForm'
import Type from '@/types/AuthType'

const EmailSignUpPage: NextPage = () => (
  <SignUpPageLayout>
    <AuthForm type={Type.SignUp} />
    <OtherOptionsButton href="/sign-up">Other Sign Up Options</OtherOptionsButton>
  </SignUpPageLayout>
)

export default EmailSignUpPage

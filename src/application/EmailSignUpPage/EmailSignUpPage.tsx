import SignUpPageLayout from '@/application/SignUpPageLayout'
import { NextPage } from 'next'
import OtherOptionsButton from '@/components/OtherOptionsButton'
import AuthForm, { Type } from '@/application/AuthForm'

const EmailSignUpPage: NextPage = () => (
  <SignUpPageLayout>
    <AuthForm type={Type.SignUp} />
    <OtherOptionsButton href="/sign-up">Other Sign Up Options</OtherOptionsButton>
  </SignUpPageLayout>
)

export default EmailSignUpPage

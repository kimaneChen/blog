import { NextPage } from 'next'
import SignUpPageLayout from '@/application/SignUpPageLayout'
import AuthButtonGroup from '@/application/AuthButtonGroup'
import AuthType from '@/types/AuthType'

const SignUpPage: NextPage = () => (
  <SignUpPageLayout>
    <AuthButtonGroup type={AuthType.SignUp} />
  </SignUpPageLayout>
)

export default SignUpPage

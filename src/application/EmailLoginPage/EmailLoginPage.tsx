import { NextPage } from 'next'
import { FaEnvelope } from 'react-icons/fa'
import Input from '@/components/Input'
import AuthButton from '@/components/AuthButton'
import LoginPageLayout from '../LoginPageLayout'
import OtherOptionsButton from '../AuthLayout/components/OtherOptionsButton'

const EmailLoginPage: NextPage = () => (
  <LoginPageLayout>
    <div className="mb-6">
      <Input placeholder="Email address" />
    </div>
    <AuthButton icon={<FaEnvelope className="text-lg" />}>Continue with Email </AuthButton>
    <OtherOptionsButton href="/login">Other Log In Options</OtherOptionsButton>
  </LoginPageLayout>
)

export default EmailLoginPage

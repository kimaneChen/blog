import { NextPage } from 'next'
import { FaEnvelope } from 'react-icons/fa'
import Input from '@/components/Input'
import AuthButton from '@/components/AuthButton'
import LoginPageLayout from '@/application/LoginPageLayout'
import OtherOptionsButton from '@/components/OtherOptionsButton'

const EmailLoginPage: NextPage = () => (
  <LoginPageLayout>
    <div className="mb-2">
      <Input placeholder="Email address" />
    </div>
    <AuthButton icon={<FaEnvelope className="text-lg" />}>Continue with Email </AuthButton>
    <OtherOptionsButton href="/login">Other Log In Options</OtherOptionsButton>
  </LoginPageLayout>
)

export default EmailLoginPage

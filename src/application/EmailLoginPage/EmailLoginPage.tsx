import LoginPageLayout from '@/application/LoginPageLayout'
import AuthButton from '@/components/AuthButton'
import Input from '@/components/Input'
import OtherOptionsButton from '@/components/OtherOptionsButton'
import { NextPage } from 'next'
import { FiMail } from 'react-icons/fi'

const EmailLoginPage: NextPage = () => (
  <LoginPageLayout>
    <div className="mb-2">
      <Input placeholder="Email address" />
    </div>
    <AuthButton icon={<FiMail className="text-lg" />}>Continue with Email </AuthButton>
    <OtherOptionsButton href="/login">Other Log In Options</OtherOptionsButton>
  </LoginPageLayout>
)

export default EmailLoginPage

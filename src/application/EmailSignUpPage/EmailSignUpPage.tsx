import SignUpPageLayout from '@/application/SignUpPageLayout'
import AuthButton from '@/components/AuthButton'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { NextPage } from 'next'
import { FaArrowLeft, FaEnvelope } from 'react-icons/fa'

const EmailSignUpPage: NextPage = () => (
  <SignUpPageLayout>
    <div className="mb-6">
      <Input placeholder="Email address" />
    </div>
    <AuthButton icon={<FaEnvelope className="text-lg" />}>Continue with Email </AuthButton>
    <Button block>
      <div className="flex items-center gap-2 justify-center">
        <FaArrowLeft className="text-lg" />
        Other Sign Up Options
      </div>
    </Button>
  </SignUpPageLayout>
)

export default EmailSignUpPage

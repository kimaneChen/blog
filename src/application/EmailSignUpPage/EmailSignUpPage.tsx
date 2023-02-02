import { NextPage } from 'next'
import AuthButton from '@/components/AuthButton'
import Button, { Variant } from '@/components/Button'
import Input from '@/components/Input'
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa'
import SignUpPageLayout from '@/application/SignUpPageLayout'

const EmailSignUpPage: NextPage = () => (
  <SignUpPageLayout>
    <div className="mb-6">
      <Input placeholder="Email address" />
    </div>
    <AuthButton icon={<FaEnvelope className="text-lg" />}>Continue with Email </AuthButton>
    <Button variant={Variant.Primary}>
      <div className="flex items-center gap-2 justify-center">
        <FaArrowLeft className="text-lg" />
        Other Sign Up Options
      </div>
    </Button>
  </SignUpPageLayout>
)

export default EmailSignUpPage

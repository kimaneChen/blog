import SignUpPageLayout from '@/application/SignUpPageLayout'
import { NextPage } from 'next'
import OtherOptionsButton from '@/components/OtherOptionsButton'
import Form from './components/Form'

const EmailSignUpPage: NextPage = () => (
  <SignUpPageLayout>
    <div className="mb-6">
      <Form />
    </div>
    <OtherOptionsButton href="/sign-up">Other Sign Up Options</OtherOptionsButton>
  </SignUpPageLayout>
)

export default EmailSignUpPage

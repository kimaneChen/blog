import { NextPage } from 'next'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import SignUpPageLayout from '@/application/SignUpPageLayout'
import AuthButton from '@/application/AuthButton'
import ContinueWithEmailButton from '@/application/ContinueWithEmailButton'

const SignUpPage: NextPage = () => (
  <SignUpPageLayout>
    <AuthButton
      icon={<FaGithub className="text-lg" />}
      onClick={() => {
        signIn('github', {
          callbackUrl: localStorage.getItem('redirect_url') || '/',
        })
        localStorage.removeItem('redirect_url')
      }}
    >
      Continue with Github
    </AuthButton>
    <ContinueWithEmailButton href="/sign-up/email" />
  </SignUpPageLayout>
)

export default SignUpPage

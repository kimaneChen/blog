import AuthButton from '@/components/AuthButton'
import ContinueWithEmailButton from '@/components/ContinueWithEmailButton'
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'
import LoginPageLayout from '../LoginPageLayout'

const LoginPage: NextPage = () => (
  <LoginPageLayout>
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
    <ContinueWithEmailButton href="/login/email" />
  </LoginPageLayout>
)
export default LoginPage

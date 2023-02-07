import Link from 'next/link'
import { NextPage } from 'next'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import ContinueWithEmailButton from '@/components/ContinueWithEmailButton'
import AuthButton from '@/components/AuthButton'
import LoginPageLayout from '../LoginPageLayout'

const LoginPage: NextPage = () => (
  <LoginPageLayout>
    <Link href="/">
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
    </Link>
    <ContinueWithEmailButton href="/login/email" />
  </LoginPageLayout>
)

export default LoginPage

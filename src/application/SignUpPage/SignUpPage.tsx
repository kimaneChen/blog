import SignUpPageLayout from '@/application/SignUpPageLayout'
import AuthButton from '@/components/AuthButton'
import Button from '@/components/Button'
import { NextPage } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

const SignUpPage: NextPage = () => (
  <SignUpPageLayout>
    <>
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

      <Link href="/email-sign-up">
        <Button>
          <div className="flex items-center gap-2 justify-center">
            Continue With Email
            <FaArrowRight className="text-lg" />
          </div>
        </Button>
      </Link>
    </>
  </SignUpPageLayout>
)

export default SignUpPage

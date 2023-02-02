import { NextPage } from 'next'
import Button, { Variant } from '@/components/Button'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import AuthButton from '@/components/AuthButton'
import SignUpPageLayout from '@/application/SignUpPageLayout'

const SignUpPage: NextPage = () => (
  <SignUpPageLayout>
    <>
      <AuthButton icon={<FaGithub className="text-lg" />}>Continue with Github</AuthButton>

      <Link href="/email-sign-up">
        <Button variant={Variant.Primary}>
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

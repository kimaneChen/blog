import AuthButton from '@/application/AuthButton'
import ContinueWithEmailButton from '@/application/ContinueWithEmailButton'
import { NextPage } from 'next'
import { FaGithub } from 'react-icons/fa'
import handleSignIn from '@/utils/handleSignIn'
import LoginPageLayout from '../LoginPageLayout'

const LoginPage: NextPage = () => (
  <LoginPageLayout>
    <AuthButton icon={<FaGithub className="text-lg" />} onClick={() => handleSignIn('github')}>
      Continue with Github
    </AuthButton>
    <ContinueWithEmailButton href="/login/email" />
  </LoginPageLayout>
)
export default LoginPage

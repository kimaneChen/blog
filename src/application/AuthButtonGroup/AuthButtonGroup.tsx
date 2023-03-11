import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import AuthButton from '@/application/AuthButton'
import ContinueWithEmailButton from '@/application/ContinueWithEmailButton'
import AuthType from '@/types/AuthType'
import handleAuthentication from '@/utils/handleAuthentication'
import getEmailAuthLink from './utils/getEmailAuthLink'

interface Props {
  type: AuthType
}

const AuthButtonGroup: FC<Props> = ({ type }) => (
  <>
    <AuthButton
      icon={<FaGithub className="text-lg" />}
      onClick={() => handleAuthentication('github')}
    >
      Continue with Github
    </AuthButton>
    <ContinueWithEmailButton href={getEmailAuthLink(type)} />
  </>
)

export default AuthButtonGroup

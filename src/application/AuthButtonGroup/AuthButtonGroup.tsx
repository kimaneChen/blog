import { FC, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import AuthButton from '@/application/AuthButton'
import ContinueWithEmailButton from '@/application/ContinueWithEmailButton'
import AuthType from '@/types/AuthType'
import handleAuthentication from '@/utils/handleAuthentication'
import getEmailAuthLink from './utils/getEmailAuthLink'

interface Props {
  type: AuthType
}

const AuthButtonGroup: FC<Props> = ({ type }) => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <AuthButton
        icon={<FaGithub className="text-lg" />}
        onClick={() => {
          setIsLoading(true)
          handleAuthentication('github')
        }}
        isLoading={isLoading}
      >
        Continue with Github
      </AuthButton>
      <ContinueWithEmailButton href={getEmailAuthLink(type)} />
    </>
  )
}

export default AuthButtonGroup

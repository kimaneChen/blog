import { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsExclamationCircleFill } from 'react-icons/bs'

const ERROR = {
  OAuthSignin: 'Error in constructing an authorization.',
  OAuthCallback: 'Error in handling the response from an OAuth provider',
  OAuthCreateAccount: 'Could not create OAuth provider user in the database.',
  EmailCreateAccount: 'Could not create email provider user in the database.',
  Callback: 'Error in the OAuth callback handler route',
  OAuthAccountNotLinked: 'Error in handling the response from an OAuth provider',
  EmailSignin: 'Sending the e-mail with the verification token failed',
  Configuration: 'There is a problem with the server configuration.',
  AccessDenied: 'Access is restricted through signIn or redirect callback.',
  Verification: 'The token has expired or has already been used',
  Default: 'Unkown error occurred',
}

const AuthErrorMessage: FC = () => {
  const router = useRouter()
  const error = (router.query.error as keyof typeof ERROR) || null
  const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    setAuthErrorMessage(ERROR[error] || null)

    const timeout = setTimeout(() => {
      setAuthErrorMessage(null)
    }, 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, [error])

  if (!authErrorMessage) return null

  return (
    <div className="fixed flex items-center py-3 top-[120px] left-1/2 translate-x-[-50%] px-[60px] gap-3 border rounded-lg border-error bg-background text-error">
      <BsExclamationCircleFill />
      {authErrorMessage}
    </div>
  )
}

export default AuthErrorMessage

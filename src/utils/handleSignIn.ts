import { signIn } from 'next-auth/react'

interface Options {
  email?: string
  redirect?: boolean
}

const handleSignIn = async (provider: string, options?: Options): Promise<void> => {
  const redirectUrl = localStorage.getItem('redirect_url') || '/user/notifications'

  await signIn(provider, {
    callbackUrl: redirectUrl,
    ...options,
  })

  localStorage.setItem('auth_message', 'Authentication success')
}

export default handleSignIn

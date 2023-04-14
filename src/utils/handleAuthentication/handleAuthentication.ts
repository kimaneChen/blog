import { signIn } from 'next-auth/react'
import LocalStorage from '@/config/LocalStorage'

interface Options {
  email?: string
  redirect?: boolean
}

const handleAuthentication = async (provider: string, options?: Options): Promise<void> => {
  const redirectUrl = localStorage.getItem('redirect_url') || '/user/notifications'

  await signIn(provider, {
    callbackUrl: redirectUrl,
    ...options,
  })

  localStorage.setItem(LocalStorage.AuthKey, LocalStorage.AuthSuccessMessage)
}

export default handleAuthentication

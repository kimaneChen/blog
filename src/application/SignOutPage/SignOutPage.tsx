import { useEffect } from 'react'
import { NextPage } from 'next'
import { signOut } from 'next-auth/react'
import Logo from '@/application/Logo'
import Signature from '@/application/Signature'

const SignOutPage: NextPage = () => {
  useEffect(() => {
    signOut({ callbackUrl: '/' })
  }, [])

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <Logo />
      <Signature />
      <p className="p-3 text-on-background">Loading...</p>
    </div>
  )
}

export default SignOutPage

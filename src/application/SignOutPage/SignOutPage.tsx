import { useEffect } from 'react'
import { NextPage } from 'next'
import { signOut } from 'next-auth/react'
import Logo from '@/application/Logo'
import Signature from '@/application/Signature'
import Header from '@/application/Header'

const SignOutPage: NextPage = () => {
  useEffect(() => {
    signOut({ callbackUrl: '/' })
  }, [])

  return (
    <>
      <div className="md:hidden">
        <Header />
      </div>
      <div className="py-52 h-screen flex items-center md:justify-center flex-col gap-4">
        <Logo />
        <Signature />
        <p className="p-3 text-on-background">Loading...</p>
      </div>
    </>
  )
}

export default SignOutPage

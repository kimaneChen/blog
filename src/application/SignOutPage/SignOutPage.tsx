import { useEffect } from 'react'
import { NextPage } from 'next'
import { signOut } from 'next-auth/react'
import Loading from '@/components/Loading'

const SignOutPage: NextPage = () => {
  useEffect(() => {
    signOut({ callbackUrl: '/' })
  }, [])

  return (
    <div className="h-screen flex items-center justify-center">
      <Loading />
    </div>
  )
}

export default SignOutPage

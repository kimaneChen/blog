import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'
import Layout from '@/application/Layout'
import { NextPage } from 'next'
import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'

const Login: FC = () => {
  const { data: session } = useSession()

  const { query } = useRouter()

  useEffect(() => {
    if (!query.redirect_url) {
      return
    }

    localStorage.setItem('redirect_url', query.redirect_url as string)
  }, [query.redirect_url])

  if (session?.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button
        type="button"
        onClick={() =>
          signIn('github', {
            callbackUrl: localStorage.getItem('redirect_url') || '/',
          })
        }
      >
        Sign in
      </button>
    </>
  )
}

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Tech blog</title>
      <meta name="description" content="A blog specialized in technology" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Login />
      </div>
    </Layout>
  </>
)

export default HomePage

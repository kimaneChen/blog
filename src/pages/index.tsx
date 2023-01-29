import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'

const Login: React.FC = () => {
  const { data: session } = useSession()
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
      <button type="button" onClick={() => signIn('github', { callbackUrl: '/' })}>
        Sign in
      </button>
    </>
  )
}

const Home: React.FC = () => (
  <>
    <Head>
      <title>Tech blog</title>
      <meta name="description" content="A blog specialized in technology" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Login />
      </div>
    </main>
  </>
)

export default Home

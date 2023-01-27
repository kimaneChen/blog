import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'
import axios from 'axios'
import { useEffect } from 'react'

const getContent = () => axios.get('/api/restricted')

const Login: React.FC = () => {
  const { data: session } = useSession()
  if (session?.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

// TODO: TS lint force return type
const Home: React.FC = () => {
  useEffect(() => {
    getContent()
  }, [])

  return (
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
}

export default Home

import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import React from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  // TODO: let eslint to force no return
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App

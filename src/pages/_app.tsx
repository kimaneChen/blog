import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import React from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => (
  <SessionProvider session={session}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </SessionProvider>
)

export default App

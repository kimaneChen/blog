import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import React from 'react'
import '@/styles/globals.css'
import { SWRConfig } from 'swr/_internal'

const fetcher = (url: string): Promise<unknown> => fetch(url).then((res) => res.json())

const App: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => (
  <SWRConfig value={{ fetcher }}>
    <SessionProvider session={session}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </SessionProvider>
  </SWRConfig>
)

export default App

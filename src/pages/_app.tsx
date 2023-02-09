import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import '@/styles/globals.css'
import { SWRConfig } from 'swr/_internal'
import { useRouter } from 'next/router'

const fetcher = (url: string): Promise<unknown> => fetch(url).then((res) => res.json())

const App: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  const { query } = useRouter()

  useEffect(() => {
    if (!query.redirect_url) {
      return
    }

    localStorage.setItem('redirect_url', query.redirect_url as string)
  }, [query.redirect_url])

  return (
    <SWRConfig value={{ fetcher }}>
      <SessionProvider session={session}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </SessionProvider>
    </SWRConfig>
  )
}

export default App

import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import '@/styles/globals.css'
import { SWRConfig } from 'swr/_internal'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import NotificationProvider from '@/context/NotificationContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

interface FetchError extends Error {
  status: number
  info?: unknown
}
const fetcher = async (url: string): Promise<unknown> => {
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.') as FetchError
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}

const App: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  const { query } = useRouter()

  useEffect(() => {
    if (!query.redirect_url) {
      return
    }

    localStorage.setItem('redirect_url', query.redirect_url as string)
  }, [query.redirect_url])

  return (
    <NotificationProvider>
      <main className={`${inter.variable} font-sans`}>
        <SWRConfig value={{ fetcher }}>
          <SessionProvider session={session}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </SessionProvider>
        </SWRConfig>
        <div id="modal" />
      </main>
    </NotificationProvider>
  )
}

export default App

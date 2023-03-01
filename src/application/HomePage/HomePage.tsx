import Layout from '@/application/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import Description from './components/Description'
import ExploreBlogs from './components/ExploreBlogs'
import AuthErrorMessage from './components/AuthErrorMessage'
import Tags from './components/Tags'

interface Props {
  fallback: Record<string, unknown>
}

const HomePage: NextPage<Props> = ({ fallback }) => (
  <SWRConfig
    value={{
      fallback,
    }}
  >
    <Head>
      <title>Make Your Voice Heard - Chuckroo</title>
    </Head>

    <AuthErrorMessage />
    <Layout>
      <Description />
      <Tags />
      <ExploreBlogs />
    </Layout>
  </SWRConfig>
)

export default HomePage

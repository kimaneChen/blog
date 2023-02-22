import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/application/Layout'
import Tags from './components/Tags'
import Description from './components/Description'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Blogs</title>
    </Head>

    <Layout>
      <Description />
      <Tags />
    </Layout>
  </>
)

export default HomePage

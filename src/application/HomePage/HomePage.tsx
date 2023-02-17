import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/application/Layout'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Blogs</title>
    </Head>
    <Layout>
      <p>Home page</p>
    </Layout>
  </>
)

export default HomePage

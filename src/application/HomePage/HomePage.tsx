import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/application/Layout'
import Description from './Description'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Blogs</title>
    </Head>
    <Layout>
      <Description />
    </Layout>
  </>
)

export default HomePage

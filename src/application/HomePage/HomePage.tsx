import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/application/Layout'
import Description from './components/Description'
import Tags from './components/Tags'
import ExploreBlogs from './components/ExploreBlogs'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Blogs</title>
    </Head>

    <Layout>
      <Description />
      <Tags />
      <ExploreBlogs />
    </Layout>
  </>
)

export default HomePage

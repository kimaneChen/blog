import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/application/Layout'
import Content from './components/Content'
import TeamCards from './components/TeamCards'

const AboutUsPage: NextPage = () => (
  <>
    <Head>
      <title>About Us</title>
    </Head>
    <Layout>
      <Content />
      <TeamCards />
    </Layout>
  </>
)

export default AboutUsPage

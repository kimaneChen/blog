import { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '@/application/Layout'
import Container from './components/Container'
import BackLink from './components/BackLink'
import BlogTitle from './components/BlogTitle'
import Content from './components/Content'
import AddComments from './components/AddComments'

const BlogViewPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading } = useSWR(`/api/blogs/${id}`)
  if (isLoading) return <>Loading...</>
  if (!data) return null

  return (
    <>
      <Layout>
        <BackLink />
      </Layout>

      <Container>
        <BlogTitle />
        <Content />
      </Container>
      <hr />
      <Container>
        <AddComments />
      </Container>
    </>
  )
}

export default BlogViewPage

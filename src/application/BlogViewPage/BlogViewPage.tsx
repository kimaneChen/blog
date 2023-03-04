import { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '@/application/Layout'
import Container, { Size } from '@/components/Container'
import BackLink from './components/BackLink'
import BlogTitle from './components/BlogTitle'
import Content from './components/Content'
import AddComments from './components/AddComments'
import Comments from './components/Comments'

const BlogViewPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading } = useSWR(`/api/blogs/${id}`)
  if (isLoading) return <>Loading...</>
  if (!data) return null

  return (
    <Layout>
      <Container>
        <BackLink />
      </Container>
      <Container size={Size.Narrow}>
        <BlogTitle />
        <Content />
      </Container>
      <hr />
      <Container size={Size.Narrow}>
        <AddComments />
        <Comments />
      </Container>
    </Layout>
  )
}

export default BlogViewPage

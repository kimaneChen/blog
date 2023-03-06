import { NextPage } from 'next'
import useBlog from '@/hooks/useBlog'
import Layout from '@/application/Layout'
import Container, { Size } from '@/components/Container'
import BackLink from './components/BackLink'
import BlogTitle from './components/BlogTitle'
import Content from './components/Content'
import AddComments from './components/AddComments'
import Comments from './components/Comments'

const BlogViewPage: NextPage = () => {
  const { blog, isLoading } = useBlog()
  if (isLoading) return <>Loading...</>
  if (!blog) return null

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

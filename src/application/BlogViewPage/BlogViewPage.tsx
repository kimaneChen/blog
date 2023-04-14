import Layout from '@/application/Layout'
import Container, { Size, Space } from '@/components/Container'
import Loading from '@/components/Loading'
import { NextPage } from 'next'
import useBlog from '@/hooks/useBlog'
import BackLink from './components/BackLink'
import BlogTitle from './components/BlogTitle'
import Comments from './components/Comments'
import Content from './components/Content'
import PublishStatusMessage from './components/PublishStatusMessage'
import NotFound from './components/NotFound'

const BlogViewPage: NextPage = () => {
  const { blog, isLoading } = useBlog()
  if (!blog) {
    return null
  }

  return (
    <Layout>
      <PublishStatusMessage />
      {isLoading && (
        <div className="h-[700px] flex items-center justify-center">
          <Loading />
        </div>
      )}
      {blog.unpublishedAt === null ? (
        <>
          <Container space={Space.Small}>
            <BackLink />
          </Container>
          <Container size={Size.Medium} space={Space.None}>
            <BlogTitle />
            <Content />
          </Container>
          <hr />
          <Comments />
        </>
      ) : (
        <Container className="h-[700px]">
          <NotFound />
        </Container>
      )}
    </Layout>
  )
}

export default BlogViewPage

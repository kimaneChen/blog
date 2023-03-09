import { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import useBlog from '@/hooks/useBlog'
import Layout from '@/application/Layout'
import Container, { Size } from '@/components/Container'
import Content from './components/Content'
import AddComments from './components/AddComments'
import BlogTitle from './components/BlogTitle'
import BackLink from './components/BackLink'
import Comments from './components/Comments'
import CommentsUserList from './components/CommentsUserList'

const BlogViewPage: NextPage = () => {
  const { blog, isLoading } = useBlog()
  const { query } = useRouter()

  useEffect(() => {
    if (query?.scrollTo) {
      setTimeout(() => document.getElementById(query.scrollTo as string)?.scrollIntoView(), 500)
    }
  }, [query.scrollTo])

  // useEffect(() =>setTimeout(()=>,500), [])

  if (isLoading) return <>Loading...</>
  if (!blog) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks

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
        <CommentsUserList />
        <Comments />
      </Container>
    </Layout>
  )
}

export default BlogViewPage

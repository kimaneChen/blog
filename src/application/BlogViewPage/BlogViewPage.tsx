import { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '@/application/Layout'
import BackLink from './components/BackLink'
import BlogTitle from './components/BlogTitle'
import Content from './components/Content'

const BlogViewPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading } = useSWR(`/api/blogs/${id}`)
  if (isLoading) return <>Loading...</>
  if (!data) return null

  return (
    <Layout>
      <BackLink />
      <BlogTitle />
      <Content />
    </Layout>
  )
}

export default BlogViewPage

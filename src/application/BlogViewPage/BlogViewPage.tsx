import { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Container from '@/components/Container'
import BackLink from '@/components/BackLink'
import Header from '@/components/Header'
import AddComments from './components/AddComments'
import BlogTitle from './components/BlogTitle'
import User from './components/User'

const BlogViewPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading } = useSWR(`/api/blogs/${id}`)
  if (isLoading) return <>Loading...</>
  if (!data) return null

  return (
    <>
      <Header />
      <Container>
        <BackLink>Back to Blogs</BackLink>
      </Container>
      <Container className="px-52">
        <div className="pb-4 mt-6">
          <BlogTitle />
        </div>
        <Container className="mb-60 flex py-12">
          <article className="prose pr-14 grow">
            Contenet 1 of blog goes here...
            <br />
            Contenet 2 of blog goes here...
            <br />
            Contenet 3 of blog goes here...
          </article>
          <User />
        </Container>
      </Container>
      <div>
        <hr />
        <Container>
          <AddComments />
        </Container>
      </div>
    </>
  )
}

export default BlogViewPage

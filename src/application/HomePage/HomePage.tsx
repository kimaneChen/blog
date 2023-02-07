import Layout from '@/application/Layout'
import SearchBlogsPage from '@/application/SearchBlogs'
import Blog from '@/types/Blog'
import { NextPage } from 'next'
import Head from 'next/head'
import useSWRInfinite from 'swr/infinite'

const TAGS = [
  { tagName: 'Account', id: '1' },
  { tagName: 'Projects', id: '2' },
  { tagName: 'Teams', id: '3' },
]

const BLOGS_PER_PAGE = 3

const HomePage: NextPage = () => {
  const { data, isLoading, size, setSize } = useSWRInfinite<Blog[]>(
    (index) => `/api/blogs?page=${index + 1}&perPage=${BLOGS_PER_PAGE}`
  )

  const blogs = data ? data.flat() : []

  const lastPage = data?.[data.length - 1]
  const isReachingEnd = lastPage && lastPage.length < BLOGS_PER_PAGE

  const isLoadMoreDisabled = isLoading || isReachingEnd

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <Layout>
        <SearchBlogsPage
          title="Blogs"
          tags={TAGS}
          blogs={blogs}
          isLoadMoreDisabled={isLoadMoreDisabled}
          onLoadMore={() => setSize(size + 1)}
        />
      </Layout>
    </>
  )
}

export default HomePage

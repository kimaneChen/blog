import Layout from '@/application/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import useSWRInfinite from 'swr/infinite'
import Blog from '@/types/Blog'
import TagsFilter from '@/application/TagsFilter'
import BlogOverview from '@/components/BlogOverview'
import Container from '@/components/Container'
import LoadMoreButton from '@/components/LoadMoreButton'

const TAGS = [
  { tagName: 'Account', id: '1' },
  { tagName: 'Projects', id: '2' },
  { tagName: 'Teams', id: '3' },
]

const BLOGS_PER_PAGE = 3

const BlogsPage: NextPage = () => {
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
        <Container>
          <section className="flex">
            <div className="w-[300px] ml-6 border-r">
              <div className="pr-5 my-9">
                <div className="font-medium">Filters</div>
                <div className="mt-3">
                  <TagsFilter tags={TAGS} />
                </div>
              </div>
            </div>
            <div className="grow py-9 px-5 mx-3">
              <div className="mb-4">
                <h1 className="text-3xl font-bold">All Blogs</h1>
              </div>
              <div className="text-on-background">See what&apos;s new on the blog</div>
              <div className="mt-6">
                {blogs.map((blog) => (
                  <div key={blog.id} className="mb-6">
                    <BlogOverview
                      id={blog.id}
                      title={blog.title}
                      date={blog.createdAt}
                      tags={blog.tags}
                      avatar={{
                        src: blog.user?.image,
                        alt: blog.user?.name || 'Unknown user',
                      }}
                    >
                      {blog.description}
                    </BlogOverview>
                  </div>
                ))}
              </div>
              <LoadMoreButton hasMore={!isLoadMoreDisabled} onLoadMore={() => setSize(size + 1)}>
                More Blogs
              </LoadMoreButton>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default BlogsPage

import Layout from '@/application/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import useSWRInfinite from 'swr/infinite'
import Blog from '@/types/Blog'
import TagsFilter from '@/application/TagsFilter'
import BlogOverview from '@/components/BlogOverview'
import Button, { Variant } from '@/components/Button'

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
        <section className="flex w-container m-auto min-h-[calc(100vh-theme(height.header))]">
          <div className="grow pr-4 border-r">
            <TagsFilter tags={TAGS} />
          </div>
          <div className="w-narrow py-9 pl-12">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-4xl">All Blogs</h1>
            </div>
            <dt>See what&apos;s new on the blog</dt>
            <div className="mt-6">
              {blogs.map((blog) => (
                <div key={blog.id} className="mb-6">
                  <BlogOverview
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
            <div className="text-center">
              <Button
                disabled={isLoadMoreDisabled}
                variant={Variant.Outline}
                onClick={() => setSize(size + 1)}
              >
                MORE BLOGS
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default BlogsPage

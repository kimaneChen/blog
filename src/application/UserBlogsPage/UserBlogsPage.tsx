import { NextPage } from 'next'
import UserLayout from '@/application/UserLayout'
import Head from 'next/head'
import Blog from '@/types/Blog'
import useSWRInfinite from 'swr/infinite'
import BlogOverview from '@/components/BlogOverview'
import Button, { Variant } from '@/components/Button'
import CreateANewBlogButton from './component/CreateANewBlogButton'

const BLOGS_PER_PAGE = 3

const UserBlogsPage: NextPage = () => {
  const { data, isLoading, size, setSize } = useSWRInfinite<Blog[]>(
    (index) => `/api/user/blogs?page=${index + 1}&perPage=${BLOGS_PER_PAGE}`
  )

  const blogs = data ? data.flat() : []
  const lastPage = data?.[data.length - 1]
  const isReachingEnd = lastPage && lastPage.length < BLOGS_PER_PAGE
  const isLoadMoreDisabled = isLoading || isReachingEnd

  return (
    <>
      <Head>
        <title>My blogs</title>
      </Head>
      <UserLayout>
        <div className="py-9">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl">Blogs</h1>
            <CreateANewBlogButton />
          </div>
          <div className="mt-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="mb-6">
                <BlogOverview
                  id={blog.id}
                  key={blog.id}
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
      </UserLayout>
    </>
  )
}

export default UserBlogsPage

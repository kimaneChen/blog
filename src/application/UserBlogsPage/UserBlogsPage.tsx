import BlogOverview from '@/application/BlogOverview'
import CreateANewBlogButton, { Size } from '@/application/CreateANewBlogButton'
import LoadMoreButton from '@/application/LoadMoreButton'
import UserLayout from '@/application/UserLayout'
import Loading from '@/components/Loading'
import Blog from '@/types/Blog'
import { NextPage } from 'next'
import Head from 'next/head'
import useSWRInfinite from 'swr/infinite'
import Link from 'next/link'
import Empty from './component/Empty'
import Actions from './component/Actions'

const BLOGS_PER_PAGE = 3

const UserBlogsPage: NextPage = () => {
  const { data, isLoading, size, setSize } = useSWRInfinite<Blog[]>(
    (index) => `/api/user/blogs?page=${index + 1}&perPage=${BLOGS_PER_PAGE}`
  )
  const blogs = data ? data.flat() : []
  const lastPage = data?.[data.length - 1]
  const isReachingEnd = lastPage && lastPage.length < BLOGS_PER_PAGE

  return (
    <>
      <Head>
        <title>My blogs</title>
      </Head>

      <UserLayout>
        {isLoading ? (
          <div className="h-[900px] flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-[32px] font-bold">Blogs</h1>
              <CreateANewBlogButton size={Size.Medium}>Create a new Blog</CreateANewBlogButton>
            </div>

            {!blogs.length ? (
              <Empty />
            ) : (
              <>
                <div className="mt-6">
                  {blogs.map((blog) => (
                    <div key={blog.id} className="mb-6">
                      <div className="flex items-center border p-5 gap-5 rounded-xl">
                        <div className="grow">
                          <Link href={`/blogs/${blog.id}`}>
                            <BlogOverview
                              unframed
                              title={blog.title}
                              date={blog.createdAt}
                              tags={blog.tags}
                            >
                              {blog.description}
                            </BlogOverview>
                          </Link>
                        </div>
                        <div className="border-l min-h-[130px]" />
                        <Actions />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <LoadMoreButton hasMore={!isReachingEnd} onLoadMore={() => setSize(size + 1)}>
                    MORE BLOGS
                  </LoadMoreButton>
                </div>
              </>
            )}
          </div>
        )}
      </UserLayout>
    </>
  )
}

export default UserBlogsPage

import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWRInfinite from 'swr/infinite'
import Blog from '@/types/Blog'
import UserLayout from '@/application/UserLayout'
import LoadMoreButton from '@/components/LoadMoreButton'
import BlogOverview from '@/components/BlogOverview'
import CreateANewBlogButton from '@/components/CreateANewBlogButton'
import Loading from '@/components/Loading'
import noBlogAlert from './assets/noblog-alert.svg'

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
        {isLoading ? (
          <Loading />
        ) : (
          <div className="pt-12 pb-7">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl">Blogs</h1>
              <CreateANewBlogButton>Create a new Blog</CreateANewBlogButton>
            </div>
            {!blogs.length ? (
              <div className="bg-background-variant min-h-[80vh] flex justify-center items-center rounded-lg">
                <div className="flex flex-col items-center ">
                  <Image src={noBlogAlert} alt="No Blogs" className="w-12 h-12 mb-6" />
                  <p className="text-placeholder">
                    Your blog page is looking a little empty. It&rsquo;s time to fill it with your
                    amazing content. Create a new blog post now!
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="mt-6">
                  {blogs.map((blog) => (
                    <div key={blog.id} className="mb-6">
                      <Link href={`/blogs/${blog.id}`}>
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
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <LoadMoreButton
                    hasMore={!isLoadMoreDisabled}
                    onLoadMore={() => setSize(size + 1)}
                  >
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

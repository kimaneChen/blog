import BlogOverview from '@/application/BlogOverview'
import CreateANewBlogButton, { Size } from '@/application/CreateANewBlogButton'
import LoadMoreButton from '@/application/LoadMoreButton'
import UserLayout from '@/application/UserLayout'
import Loading from '@/components/Loading'
import Blog from '@/types/Blog'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWRInfinite from 'swr/infinite'
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
              <div className="bg-background-variant min-h-[800px] flex justify-center items-center rounded-lg">
                <div className="flex flex-col items-center">
                  <Image src={noBlogAlert} alt="No Blogs" className="w-12 h-12 mb-5" />
                  <p className="text-on-background">
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

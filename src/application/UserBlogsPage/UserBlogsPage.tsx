import { NextPage } from 'next'
import UserLayout from '@/application/UserLayout'
import Head from 'next/head'
import Blog from '@/types/Blog'
import useSWRInfinite from 'swr/infinite'
import { useSession } from 'next-auth/react'
import Avatar from '@/components/Avatar'
import TagsFilter from '@/application/TagsFilter'
import BlogOverview from '@/components/BlogOverview'
import Button, { Variant } from '@/components/Button'
import CreateANewBlogButton from './component/CreateANewBlogButton'

const TAGS = [
  { tagName: 'Account', id: '1' },
  { tagName: 'Projects', id: '2' },
  { tagName: 'Teams', id: '3' },
]

const BLOGS_PER_PAGE = 3

const UserBlogsPage: NextPage = () => {
  const { data: session } = useSession()

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
        <section className="flex m-auto min-h-[calc(100vh-theme(height.header))] px-6">
          <div className="grow pr-[18px] border-r">
            <section className="pt-8 flex gap-6">
              <Avatar
                width={100}
                height={100}
                src={session?.user?.image}
                alt={session?.user?.name}
              />
              <div className="flex flex-col py-3 gap-[10px]">
                <h2 className="text-2xl font-medium">{session?.user?.name}</h2>
                <h3 className="text-lg font-medium">@occupation</h3>
              </div>
            </section>
            <TagsFilter tags={TAGS} />
          </div>
          <div className="w-narrow py-9 pl-12">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl">Blogs</h1>
              <CreateANewBlogButton />
            </div>
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
      </UserLayout>
    </>
  )
}

export default UserBlogsPage

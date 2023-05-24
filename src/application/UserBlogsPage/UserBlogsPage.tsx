import CreateANewBlogButton, { Size } from '@/application/CreateANewBlogButton'
import Loading from '@/components/Loading'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import UserLayout from '@/application/UserLayout'
import Head from 'next/head'
import Pagination from '@/components/Pagination'
import Empty from '@/components/Empty'
import Blogs, { PER_PAGE } from './components/Blogs'

const UserBlogsPage: NextPage = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 1
  const { data, isLoading } = useSWR(`/api/user/blogs?perPage=${PER_PAGE}&page=${page}`)
  const isPreviousPage = page > 1
  const isNextPage = data?.length === PER_PAGE
  const blogs = data ? data.flat() : []

  return (
    <>
      <Head>
        <title>My blogs</title>
      </Head>

      <UserLayout>
        {isLoading ? (
          <div className="h-[540px] xl:h-[900px] flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[32px] font-bold">Blogs</h1>
            <CreateANewBlogButton size={Size.Medium}>
              <div className="text-sm md:text-base">Create a new Blog</div>
            </CreateANewBlogButton>
          </div>
        )}

        {!blogs.length && page === 1 ? (
          <Empty>
            Your blog page is looking a little empty. It&rsquo;s time to fill it with your amazing
            content. Create a new blog post now!
          </Empty>
        ) : (
          <>
            {!blogs.length && !isNextPage && <div className="text-center">No More Blogs</div>}
            {isPreviousPage && (
              <div className="hidden">
                <Blogs page={page - 1} />
              </div>
            )}
            <Blogs page={page} />
            {isNextPage && (
              <div className="hidden">
                <Blogs page={page + 1} />
              </div>
            )}
            <Pagination
              perPage={PER_PAGE}
              page={page}
              total={blogs.length}
              onPageChange={(to: number): void => {
                router.push(`/user/blogs?page=${to}`)
              }}
            />
          </>
        )}
      </UserLayout>
    </>
  )
}

export default UserBlogsPage

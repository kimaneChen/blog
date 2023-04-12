import UserLayout from '@/application/UserLayout'
import { NextPage } from 'next'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Comment from '@/types/Comment'
import Loading from '@/components/Loading'
import Empty from '@/components/Empty'
import Pagination from '@/components/Pagination'
import Comments from './components/Comments'

const UserCommentsPage: NextPage = () => {
  const PER_PAGE = 10
  const router = useRouter()
  const page = Number(router.query.page) || 1

  const { data, isLoading } = useSWR<Comment[]>(
    `/api/user/comments?perPage=${PER_PAGE}&page=${page}`
  )
  const isPreviousPage = page > 1
  const isNextPage = data?.length === PER_PAGE

  return (
    <UserLayout>
      {isLoading ? (
        <div className="h-[900px] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div>
          {!data?.length && page === 1 ? (
            <Empty>
              Your have not comment with others. It&rsquo;s time to fill it with your amazing
              comments to other blog.
            </Empty>
          ) : (
            <>
              {!data?.length && !isNextPage && <div className="text-center">No More Comments</div>}
              {isPreviousPage && (
                <div className="hidden">
                  <Comments page={page - 1} />
                </div>
              )}
              <Comments page={page} />
              {isNextPage && (
                <div className="hidden">
                  <Comments page={page + 1} />
                </div>
              )}
              <Pagination
                perPage={PER_PAGE}
                page={page}
                total={data?.length || 0}
                onPageChange={(to: number): void => {
                  router.push(`/user/comments?page=${to}`)
                }}
              />
            </>
          )}
        </div>
      )}
    </UserLayout>
  )
}
export default UserCommentsPage

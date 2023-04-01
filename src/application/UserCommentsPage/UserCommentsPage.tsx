import UserLayout from '@/application/UserLayout'
import { NextPage } from 'next'
import useSWRInfinite from 'swr/infinite'
import { useRouter } from 'next/router'
import Comment from '@/types/Comment'
import { parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import groupBy from 'lodash/groupBy'
import Loading from '@/components/Loading'
import Comments from './components/Comments'
import Empty from './components/Empty'
import Pagination from './components/Pagination'

const UserCommentsPage: NextPage = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 1

  const { data, isLoading } = useSWRInfinite<Comment[]>(() => `/api/user/comments`)
  const comments = data ? data.flat() : []
  const dailyComments = groupBy(comments, (comment) =>
    formatInTimeZone(parseISO(comment.createdAt), 'GMT', 'LLL d yyyy')
  )
  return (
    <UserLayout>
      {isLoading ? (
        <div className="h-[900px] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div>
          {!comments.length ? (
            <Empty />
          ) : (
            <>
              {Object.keys(dailyComments).map((date) => (
                <Comments key={date} date={date} comments={dailyComments[date]} />
              ))}
              <Pagination
                perPage={3}
                page={page}
                total={comments.length}
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

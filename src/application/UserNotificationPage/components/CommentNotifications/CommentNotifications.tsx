import { FC } from 'react'
import useSWR from 'swr'
import Loading from '@/components/Loading'
import { useRouter } from 'next/router'
import CommentNotification from '@/types/CommentNotification'
import Empty from '@/components/Empty'
import Pagination from '@/components/Pagination'
import Items, { PER_PAGE } from './components/Items'

const CommentNotifications: FC = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 1
  const { data, isLoading } = useSWR<CommentNotification[]>(
    `/api/user/comment-notifications?perPage=${PER_PAGE}&page=${page}`
  )
  const isPreviousPage = page > 1
  const isNextPage = data?.length === PER_PAGE

  return isLoading ? (
    <div className="h-[630px] flex items-center justify-center">
      <Loading />
    </div>
  ) : (
    <div>
      {!data?.length && page === 1 ? (
        <Empty> No comments for your blogs </Empty>
      ) : (
        <>
          {!data?.length && !isNextPage && (
            <div className="text-center">No More Notifications of Comments</div>
          )}
          {isPreviousPage && (
            <div className="hidden">
              <Items page={page - 1} />
            </div>
          )}
          <Items page={page} />
          {isNextPage && (
            <div className="hidden">
              <Items page={page + 1} />
            </div>
          )}
          <Pagination
            perPage={PER_PAGE}
            page={page}
            total={data?.length || 0}
            onPageChange={(to: number): void => {
              router.push(`/user/notifications?page=${to}&tab=Blogs`)
            }}
          />
        </>
      )}
    </div>
  )
}

export default CommentNotifications

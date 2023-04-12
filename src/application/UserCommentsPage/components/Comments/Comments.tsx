import React, { FC } from 'react'
import Link from 'next/link'
import Comment from '@/types/Comment'
import useSWR from 'swr'
import groupBy from 'lodash/groupBy'
import { parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import Item from './components/Item'

export const PER_PAGE = 10

type Props = {
  page: number
}

const Comments: FC<Props> = ({ page }) => {
  const { data } = useSWR<Comment[]>(`/api/user/comments?perPage=${PER_PAGE}&page=${page}`)
  const dailyComments = groupBy(data, (comment) =>
    formatInTimeZone(parseISO(comment.createdAt), 'GMT', 'LLL d yyyy')
  )

  return (
    <div className="mb-6">
      {Object.keys(dailyComments).map((date) => (
        <>
          <div className="text-sm text-on-background mb-3" key={date}>
            {date}
          </div>
          <ul>
            {dailyComments[date].map((comment) => (
              <Link key={comment.id} href={`/blogs/${comment.blog.id}?scrollTo=${comment.id}`}>
                <Item title={comment.blog.title} comment={comment.content} />
              </Link>
            ))}
          </ul>
        </>
      ))}
    </div>
  )
}

export default Comments

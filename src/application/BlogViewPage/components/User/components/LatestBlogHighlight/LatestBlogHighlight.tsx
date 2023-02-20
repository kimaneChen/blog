import { FC } from 'react'
import Link from 'next/link'
import Date from '@/components/Date'
import DateFormat from '@/types/DateFormat'

interface Props {
  title: string
  updatedAt: string
  id: string
}

const LatestBlogHighlight: FC<Props> = ({ title, updatedAt, id }) => (
  <div className="mb-4">
    <Link href={`/blog/${id}`}>
      <h3 className="text-sm font-medium">{title}</h3>
    </Link>
    <Date format={DateFormat.LongDate} className="text-xs text-placeholder">
      {updatedAt}
    </Date>
  </div>
)

export default LatestBlogHighlight

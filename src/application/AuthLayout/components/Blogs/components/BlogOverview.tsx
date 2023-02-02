import { FC, ReactNode } from 'react'
import Link from 'next/link'
import Badge from '@/components/Badge'

export interface Props {
  date: string
  title: string
  children: ReactNode
  badge: ReactNode
}

const BlogOverview: FC<Props> = ({ date, title, children, badge }) => (
  <Link href="/blogs/id">
    <div className="bg-white rounded-xl border p-4 mb-4">
      <div className="text-on-background text-sm">{date}</div>
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="text-on-background">{children}</div>
      <div className="mt-2.5 flex gap-2">
        <Badge>{badge}</Badge>
      </div>
    </div>
  </Link>
)

export default BlogOverview

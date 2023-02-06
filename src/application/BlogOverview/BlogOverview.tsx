import { FC, ReactNode } from 'react'
import Link from 'next/link'
import Badge from '@/components/Badge'
import Avatar from '@/components/Avatar'

export interface Props {
  date: string
  title: string
  children: ReactNode
  badge: ReactNode
  avatar: { src?: string; alt: string }
}

const BlogOverview: FC<Props> = ({ date, title, children, badge, avatar }) => (
  <Link href="/blogs/id">
    <div className="bg-white rounded-xl border p-4 mb-4">
      <div className="text-on-background text-sm">{date}</div>
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="text-on-background">{children}</div>
      <div className="flex pt-4 justify-between ">
        <div className="mt-2.5 flex gap-2">
          <Badge>{badge}</Badge>
        </div>
        <div className="mt-2.5">
          <Avatar width={28} height={28} alt={avatar.alt} src={avatar.src} />
        </div>
      </div>
    </div>
  </Link>
)

export default BlogOverview

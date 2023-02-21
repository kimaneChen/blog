import Avatar from '@/components/Avatar'
import Tag from '@/components/Tag'
import Blog from '@/types/Blog'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import Date from '@/components/Date'

export interface Props {
  id: string
  date: string
  title: string
  children: ReactNode
  tags: Blog['tags']
  avatar?: {
    src?: string | null
    alt: string
  }
}

const BlogOverview: FC<Props> = ({ id, date, title, children, avatar, tags }) => (
  <Link href={`/blogs/${id}`}>
    <article className="bg-background rounded-xl border p-4">
      <Date className="text-on-background text-sm">{date}</Date>
      <h3 className="text-2xl font-medium my-2">{title}</h3>
      <p className="text-on-background">{children}</p>
      <div className="flex pt-4 justify-between ">
        <div>
          {!!tags?.length && (
            <div className="mt-2.5 flex gap-2">
              {tags.map((tag) => (
                <Tag key={tag.id}>{tag.name}</Tag>
              ))}
            </div>
          )}
        </div>
        <div className="mt-2.5">
          <Avatar width={28} height={28} alt={avatar?.alt} src={avatar?.src} />
        </div>
      </div>
    </article>
  </Link>
)

export default BlogOverview

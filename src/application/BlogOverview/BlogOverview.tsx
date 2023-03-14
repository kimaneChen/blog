import Avatar from '@/components/Avatar'
import Date from '@/components/Date'
import Tag from '@/components/Tag'
import Blog from '@/types/Blog'
import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export interface Props {
  date: string
  title: string
  children: ReactNode
  tags: Blog['tags']
  avatar?: {
    src?: string | null
    alt: string
  }
  unframed?: boolean
}

const BlogOverview: FC<Props> = ({
  date,
  title,
  children,
  avatar = undefined,
  tags,
  unframed = false,
}) => {
  const className = classNames(
    'bg-background',
    !unframed && ['border', 'rounded-xl', 'py-4', 'px-6']
  )

  return (
    <article className={className}>
      <Date className="text-on-background text-sm">{date}</Date>
      <h3 className="text-2xl font-medium my-2 break-words">{title}</h3>
      <p className="text-on-background">{children}</p>
      <div className="flex justify-between mt-3">
        <div className="flex gap-2 flex-wrap">
          {tags?.map((tag) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </div>

        {avatar && <Avatar width={28} height={28} alt={avatar.alt} src={avatar.src} />}
      </div>
    </article>
  )
}

export default BlogOverview

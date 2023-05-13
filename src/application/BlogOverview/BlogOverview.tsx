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
  ellipsis?: boolean
}

const BlogOverview: FC<Props> = ({
  date,
  title,
  children,
  avatar = undefined,
  tags,
  unframed = false,
  ellipsis = false,
}) => {
  const className = classNames(
    'bg-background',
    !unframed && ['border', 'rounded-xl', 'py-4', 'px-6']
  )

  const truncate = classNames(ellipsis && 'truncate')

  return (
    <article className={className}>
      <Date className="text-on-background text-sm">{date}</Date>
      <h3 className={classNames('text-2xl font-medium my-2 break-words', truncate)}>{title}</h3>
      <p className={classNames('text-on-background, break-words', truncate)}>{children}</p>
      <div className="flex justify-between content-end items-center md:items-start my-3 md:mb-0">
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

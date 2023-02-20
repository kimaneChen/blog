import useSWR from 'swr'
import Date from '@/components/Date'
import { FC } from 'react'
import { useRouter } from 'next/router'
import Tag from '@/components/Tag'
import TagType from '@/types/Tag'
import DateFormat from '@/types/DateFormat'

const BlogTitle: FC = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: blog } = useSWR(`/api/blog/${id}`)
  if (!blog) return null
  return (
    <header>
      <Date className="mt-3 text-on-background text-sm" format={DateFormat.LongDate}>
        {blog.createdAt}
      </Date>
      <h1 className="mt-3 text-4xl font-bold">{blog.title}</h1>
      <h3 className="mt-3 font-medium text-lg text-on-background">{blog.description}</h3>
      <div className="mt-5 text-on-background flex gap-3">
        {blog.tags.map((tag: TagType) => (
          <Tag key={tag.id}>{tag.name}</Tag>
        ))}
      </div>
    </header>
  )
}

export default BlogTitle

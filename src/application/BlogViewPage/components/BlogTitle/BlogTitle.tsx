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
  const { data: blog } = useSWR(`/api/blogs/${id}`)
  if (!blog) return null
  return (
    <header className="max-w-[980px] my-6 pt-3">
      <Date className="text-sm text-on-background" format={DateFormat.LongDate}>
        {blog.createdAt}
      </Date>
      <h1 className="text-4xl my-3">{blog.title}</h1>
      <h3 className="text-lg text-on-background mb-3">{blog.description}</h3>
      <div className="flex gap-2 text-on-background py-1">
        {blog.tags.map((tag: TagType) => (
          <Tag key={tag.id}>{tag.name}</Tag>
        ))}
      </div>
    </header>
  )
}

export default BlogTitle

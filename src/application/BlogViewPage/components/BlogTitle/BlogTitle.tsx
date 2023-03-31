import Date from '@/components/Date'
import Tag from '@/components/Tag'
import DateFormat from '@/types/DateFormat'
import { FC } from 'react'
import useBlog from '@/hooks/useBlog'

const BlogTitle: FC = () => {
  const { blog } = useBlog()

  if (!blog) {
    return null
  }

  return (
    <header className="w-[700px] mt-9 mb-11">
      <Date className="text-sm text-on-background" format={DateFormat.LongDate}>
        {blog.createdAt}
      </Date>
      <h1 className="text-4xl my-3">{blog.title}</h1>
      {blog.description && <h3 className="text-lg text-on-background mb-3">{blog.description}</h3>}
      {blog.tags && (
        <div className="flex gap-2 text-on-background py-1">
          {blog.tags.map((tag) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </div>
      )}
    </header>
  )
}

export default BlogTitle

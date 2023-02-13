import { FC } from 'react'
import BlogOverview from '@/components/BlogOverview'
import Blog from '@/types/Blog'
import useSWR from 'swr'

const BLOGS_LIMIT = 2

const Blogs: FC = () => {
  const { data } = useSWR(`/api/blogs?perPage=${BLOGS_LIMIT}`)

  if (!data) return null

  return (
    <div className="py-3">
      {data.map((blog: Blog) => (
        <BlogOverview
          title={blog.title}
          date={blog.createdAt}
          key={blog.id}
          tags={blog.tags}
          avatar={{
            src: blog.user?.image,
            alt: blog.user?.name || 'Unknown user',
          }}
        >
          {blog.description}
        </BlogOverview>
      ))}
    </div>
  )
}

export default Blogs

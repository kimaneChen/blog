import { FC } from 'react'
import BlogOverview from '@/components/BlogOverview'
import Blog from '@/types/Blog'
import useSWR from 'swr'

const BLOGS_LIMIT = 2

const Blogs: FC = () => {
  const { data } = useSWR(`/api/blogs?perPage=${BLOGS_LIMIT}`)

  if (!data) return null

  return data.map((blog: Blog) => (
    <div key={blog.id} className="mt-3">
      <BlogOverview
        title={blog.title}
        date={blog.createdAt}
        tags={blog.tags}
        avatar={{
          src: blog.user?.image,
          alt: blog.user?.name || 'Unknown user',
        }}
      >
        {blog.description}
      </BlogOverview>
    </div>
  ))
}

export default Blogs

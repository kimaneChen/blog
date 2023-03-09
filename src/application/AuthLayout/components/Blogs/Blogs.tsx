import { FC } from 'react'
import BlogOverview from '@/application/BlogOverview'
import Blog from '@/types/Blog'
import useSWR from 'swr'
import Link from 'next/link'

const BLOGS_LIMIT = 2

const Blogs: FC = () => {
  const { data } = useSWR(`/api/blogs?perPage=${BLOGS_LIMIT}`)

  if (!data) {
    return null
  }

  return (
    <>
      {data.map((blog: Blog) => (
        <div key={blog.id} className="mt-3">
          <Link href={`/blogs/${blog.id}`}>
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
          </Link>
        </div>
      ))}
    </>
  )
}

export default Blogs

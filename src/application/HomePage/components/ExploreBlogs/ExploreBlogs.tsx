import { FC } from 'react'
import useSWR from 'swr'
import Blog from '@/types/Blog'
import Router from 'next/router'
import classNames from 'classnames'
import BlogOverview from '@/components/BlogOverview'
import Button, { Variant } from '@/components/Button'
import UserInfo from './components/UserInfo'
import DecorationLine from './components/DecorationLine'

const BLOGS_LIMIT = 10

const ExploreBlogs: FC = () => {
  const { data: blogs } = useSWR(`/api/blogs?perPage=${BLOGS_LIMIT}`)

  if (!blogs) return null

  return (
    <div className="md:px-12 pt-20 pb-40">
      <h3 className="text-2xl font-bold mb-10">Explore Our Blogs</h3>

      {blogs.map((blog: Blog, index: number) => {
        const reversed = index % 2 !== 0

        return (
          <div
            key={blog.id}
            className={classNames('flex', 'mb-10', reversed && ['flex-row-reverse'])}
          >
            <div
              className={classNames(
                'md:w-[70%]',
                'border',
                'flex',
                'items-center',
                'rounded-xl',
                'py-6',
                'bg-background',
                reversed && ['flex-row-reverse']
              )}
            >
              <UserInfo name={blog.user?.name} image={blog.user?.image} />
              <div className="border-r h-full" />
              <div className="grow px-8">
                <BlogOverview
                  id={blog.id}
                  title={blog.title}
                  date={blog.createdAt}
                  tags={blog.tags}
                  unframed
                >
                  {blog.description}
                </BlogOverview>
              </div>
            </div>
            {index > 0 && index < blogs.length - 1 && <DecorationLine />}
          </div>
        )
      })}

      <Button
        variant={Variant.Dark}
        onClick={() => Router.push('/blogs')}
        className="mt-20 mx-auto px-12 block"
      >
        SEE MORE BLOGS
      </Button>
    </div>
  )
}

export default ExploreBlogs

import { FC } from 'react'
import useSWR from 'swr'
import Blog from '@/types/Blog'
import Link from 'next/link'
import Router from 'next/router'
import classNames from 'classnames'
import BlogOverview from '@/application/BlogOverview'
import Button, { Size, Variant } from '@/components/Button'
import useIsScreen, { Screen } from '@/hooks/useIsScreen'
import UserInfo from './components/UserInfo'
import DecorationLine from './components/DecorationLine'

export const BLOGS_PER_PAGE = 10

const ExploreBlogs: FC = () => {
  const isSmallScreen = useIsScreen(Screen.Small)
  const { data: blogs } = useSWR(`/api/blogs?perPage=${BLOGS_PER_PAGE}`)

  if (!blogs) {
    return null
  }

  return (
    <div className="md:px-12 py-24 md:pb-40">
      <h3 className="text-lg md:text-2xl font-bold mb-6 md:mb-10">Explore Our Blogs</h3>

      {blogs.map((blog: Blog, index: number) => {
        const reversed = index % 2 !== 0

        return (
          <div
            key={blog.id}
            className={classNames('flex', 'mb-6', 'md:mb-10', reversed && ['md:flex-row-reverse'])}
          >
            <Link
              href={`/blogs/${blog.id}`}
              className={classNames(
                'w-full',
                'md:w-[70%]',
                'border',
                'md:flex',
                'items-center',
                'rounded-xl',
                'px-3',
                'md:py-6',
                'bg-background',
                reversed && ['flex-row-reverse']
              )}
            >
              <UserInfo
                name={blog.user?.name}
                image={blog.user?.image}
                occupation={blog.user?.occupation}
              />
              <div className="border-t md:border-r md:h-full" />
              <div className="md:grow pt-3 pb-5 md:pb-3 px-5 md:px-8">
                <BlogOverview title={blog.title} date={blog.createdAt} tags={blog.tags} unframed>
                  {blog.description}
                </BlogOverview>
              </div>
            </Link>

            {index > 0 && index < blogs.length - 1 && <DecorationLine />}
          </div>
        )
      })}

      <Button
        size={isSmallScreen ? Size.Medium : Size.Normal}
        variant={Variant.Dark}
        onClick={() => Router.push('/blogs')}
        className="text-sm mt-10 md:mt-20 mx-auto px-12 block"
      >
        See More Blogs
      </Button>
    </div>
  )
}

export default ExploreBlogs

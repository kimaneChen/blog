import deleteBlog from '@/apis/admin/deleteBlog'
import publishBlog from '@/apis/admin/publishBlog'
import BlogOverview from '@/components/BlogOverview'
import Button, { Size, Variant } from '@/components/Button'
import Blog from '@/types/Blog'
import { FC } from 'react'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import Link from 'next/link'

const PER_PAGE = 10

interface Props {
  page: number
}

const Blogs: FC<Props> = ({ page }) => {
  const { data } = useSWR(`/api/admin/blogs?perPage=${PER_PAGE}&page=${page}`)

  const { trigger: unpublishOrDelete } = useSWRMutation(
    `/api/admin/blogs?perPage=${PER_PAGE}&page=${page}`,
    (_, { arg: { id } }) => deleteBlog(id)
  )

  const { trigger: publish } = useSWRMutation(
    `/api/admin/blogs?perPage=${PER_PAGE}&page=${page}`,
    (_, { arg: { id } }) => publishBlog(id)
  )

  return (
    <div className="grid grid-cols-2 gap-8">
      {data?.map((item: Blog) => (
        <div key={item.id}>
          <Link href={`/blogs/${item.id}`}>
            <BlogOverview
              title={item.title}
              date={item.createdAt}
              tags={item.tags}
              avatar={{
                src: item.user?.image,
                alt: item.user?.name || 'Unknown user',
              }}
            >
              {item.description}
            </BlogOverview>
          </Link>
          <div className="mt-2 flex gap-2 items-center">
            {item.unpublishedAt ? (
              <>
                <div>{item.unpublishedAt}</div>
                <Button
                  variant={Variant.Error}
                  size={Size.Small}
                  onClick={() => unpublishOrDelete(item)}
                >
                  Delete
                </Button>
                <Button variant={Variant.Primary} size={Size.Small} onClick={() => publish(item)}>
                  Publish
                </Button>
              </>
            ) : (
              <Button
                variant={Variant.Warn}
                size={Size.Small}
                onClick={() => unpublishOrDelete(item)}
              >
                Unpublish
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blogs

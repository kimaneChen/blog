import deleteBlog from '@/apis/admin/deleteBlog'
import publishBlog from '@/apis/admin/publishBlog'
import BlogOverview from '@/application/BlogOverview'
import Blog from '@/types/Blog'
import { FC } from 'react'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import Link from 'next/link'
import Actions from './components/Actions'

export const PER_PAGE = 3

interface Props {
  page: number
}

const Blogs: FC<Props> = ({ page }) => {
  const { data } = useSWR(`/api/user/blogs?perPage=${PER_PAGE}&page=${page}`)

  const { trigger: unpublishOrDelete } = useSWRMutation(
    `/api/user/blogs?perPage=${PER_PAGE}&page=${page}`,
    (_, { arg: id }) => deleteBlog(id)
  )

  const { trigger: publish } = useSWRMutation(
    `/api/user/blogs?perPage=${PER_PAGE}&page=${page}`,
    (_, { arg: id }) => publishBlog(id)
  )

  return data?.map((item: Blog) => (
    <div
      key={item.id}
      className="flex flex-col md:flex-row items-center border p-5 mt-6 gap-5 rounded-xl"
    >
      <div className="grow border-b md:border-b-0 md:border-r md:pr-5 w-full">
        <Link href={`/blogs/${item.id}`}>
          <BlogOverview unframed title={item.title} date={item.createdAt} tags={item.tags}>
            {item.description}
          </BlogOverview>
        </Link>
      </div>
      <Actions
        id={item.id}
        unpublishedAt={item.unpublishedAt}
        onDelete={() => unpublishOrDelete(item.id)}
        onUnpiblish={() => unpublishOrDelete(item.id)}
        onPublish={() => publish(item.id)}
      />
    </div>
  ))
}

export default Blogs

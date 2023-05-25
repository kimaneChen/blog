import Date from '@/components/Date'
import Tag from '@/components/Tag'
import DateFormat from '@/types/DateFormat'
import { FC } from 'react'
import useBlog from '@/hooks/useBlog'
import { FiHeart } from 'react-icons/fi'
import { TbShare } from 'react-icons/tb'

const BlogTitle: FC = () => {
  const { blog } = useBlog()

  if (!blog) {
    return null
  }

  return (
    <header className="md:w-[700px] mt-9 mb-8 md:mb-11 mx-auto lg:mx-0">
      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-on-background">
        <div className="flex">
          <Date format={DateFormat.LongDate}>{blog.createdAt}</Date>
          <div className="pl-2">-&nbsp;&nbsp;By&nbsp;{blog.user?.name}</div>
        </div>
        <div className="flex justify-end">
          <div className="pr-4">9 Views</div>
          <div className="pr-4">
            <a href="#" title="Bookmark">
              <FiHeart className="inline w-5 h-5" />
            </a>
          </div>
          <div className="pr-2">
            <a href="#" title="Share">
              <TbShare className="inline w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-3xl md:text-4xl my-3">{blog.title}</h1>
      {blog.description && (
        <h3 className="md:text-lg text-on-background mb-3">{blog.description}</h3>
      )}
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

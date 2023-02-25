import { FC } from 'react'
import Blog from '@/types/Blog'
import Tag from '@/components/Tag'
import Link from 'next/link'
import NoWrapText from './components/NoWrapText'

interface Props {
  blog: Blog
  onClick: () => void
}

const SearchBlog: FC<Props> = ({ blog, onClick }) => (
  <Link
    onClick={onClick}
    href={`/blogs/${blog.id}`}
    className="flex justify-center hover:bg-background-variant cursor-pointer"
  >
    <article className="w-[580px] px-6 py-4">
      <h2 className="text-sm">
        <NoWrapText>{blog.title}</NoWrapText>
      </h2>
      <p className="text-on-background text-xs my-2 pl-2 border-l-4">
        <NoWrapText>{blog.description}</NoWrapText>
      </p>
      <div className="flex gap-2.5 overflow-hidden">
        {blog.tags && blog.tags.map((tag) => <Tag key={tag.id}>{tag.name}</Tag>)}
      </div>
    </article>
  </Link>
)

export default SearchBlog

import { FC } from 'react'
import Blog from '@/types/Blog'
import Tag from '@/components/Tag'
import Link from 'next/link'
import NoWrapText from './components/NoWrapText'
import HighlightSearch from './components/HighlightSearch'

interface Props {
  blog: Blog
  search: string
  onClick: () => void
}

const SearchBlog: FC<Props> = ({ blog, search, onClick }) => (
  <Link onClick={onClick} href={`/blogs/${blog.id}`} className="flex justify-center cursor-pointer">
    <article className="w-[600px] h-[120px] mx-6 px-6 py-4 rounded overflow-x-hidden hover:bg-background-variant">
      <h2 className="text-sm">
        <NoWrapText>
          <HighlightSearch text={blog.title} search={search} className="underline" />
        </NoWrapText>
      </h2>
      <p className="text-on-background text-xs mt-2 mb-3 pl-2 leading-[18px] relative before:absolute before:left-0 before:bg-outline before:w-1 before:h-full before:rounded">
        {blog.description && (
          <NoWrapText>
            <HighlightSearch text={blog.description} search={search} />
          </NoWrapText>
        )}
      </p>
      <div className="flex gap-2 overflow-hidden">
        {blog.tags?.map((tag) => (
          <Tag key={tag.id}>
            <HighlightSearch text={tag.name} search={search} />
          </Tag>
        ))}
      </div>
    </article>
  </Link>
)

export default SearchBlog

import Input from '@/components/Input'
import { FiSearch } from 'react-icons/fi'
import Button, { Variant } from '@/components/Button'
import BlogOverview from '@/application/BlogOverview'
import { FC, ReactNode } from 'react'
import Blog from '@/types/Blog'
import Tag from './components/Tag'

interface Props {
  blogs: Blog[]
  title: ReactNode
  isLoadMoreDisabled?: boolean
  onLoadMore: () => void
  tags: { tagName: string; id: string }[]
}

const SearchBlogs: FC<Props> = ({ title, tags, blogs, isLoadMoreDisabled = false, onLoadMore }) => (
  <section className="flex px-6 w-container m-auto min-h-[calc(100vh-theme(height.header))]">
    <div className="grow py-8 pr-4 border-r-2">
      <Input placeholder="Search posts..." suffix={<FiSearch />} />
      <section className="py-4">
        <h3>Filters</h3>
        {tags.map((tag) => (
          <Tag name={tag.tagName} key={tag.id} />
        ))}
      </section>
    </div>
    <div className="w-narrow py-9 px-5">
      <h1 className="text-4xl mb-4">{title}</h1>
      <dt>See what&apos;s new on the blog</dt>
      <div className="mt-4">
        {blogs.map((blog) => (
          <BlogOverview
            title={blog.title}
            date={blog.createdAt}
            key={blog.id}
            avatar={{
              src: blog.user?.image,
              alt: blog.user?.name || 'Unknown user',
            }}
          >
            {blog.description}
          </BlogOverview>
        ))}
      </div>
      <div className="text-center">
        <Button disabled={isLoadMoreDisabled} variant={Variant.Outline} onClick={onLoadMore}>
          MORE BLOGS
        </Button>
      </div>
    </div>
  </section>
)

export default SearchBlogs

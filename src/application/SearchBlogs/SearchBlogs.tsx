import Input from '@/components/Input'
import { FiSearch } from 'react-icons/fi'
import Button, { Variant } from '@/components/Button'
import BlogOverview from '@/application/BlogOverview'
import { FC, ReactNode } from 'react'
import Blog from '@/types/Blog'
import Tag from './components/Tag'
import CreateANewBlogButton from './components/CreateANewBlogButton'

interface Props {
  blogs: Blog[]
  title: ReactNode
  isLoadMoreDisabled?: boolean
  onLoadMore: () => void
  tags: { tagName: string; id: string }[]
}

const SearchBlogs: FC<Props> = ({ title, tags, blogs, isLoadMoreDisabled = false, onLoadMore }) => (
  <section className="flex w-container m-auto min-h-[calc(100vh-theme(height.header))]">
    <div className="grow py-8 pr-12 border-r">
      <Input placeholder="Search posts..." suffix={<FiSearch />} />
      <section className="py-4">
        <h3>Filters</h3>
        {tags.map((tag) => (
          <Tag name={tag.tagName} key={tag.id} />
        ))}
      </section>
    </div>
    <div className="w-narrow py-9 pl-12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl">{title}</h1>
        <CreateANewBlogButton />
      </div>
      <dt>See what&apos;s new on the blog</dt>
      <div className="mt-4">
        {blogs.map((blog) => (
          <BlogOverview
            key={blog.id}
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

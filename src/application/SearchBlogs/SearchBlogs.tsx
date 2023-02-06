import Input from '@/components/Input'
import { FiSearch } from 'react-icons/fi'
import Button, { Variant } from '@/components/Button'
import BlogOverview from '@/application/BlogOverview'
import { FC } from 'react'
import Tag from './components/Tag'

interface Props {
  blogs: { title: string; badge: string; time: string; id: number }[]
  tags: { tagName: string; id: string }[]
}

const SearchBlogs: FC<Props> = ({ blogs, tags }) => (
  <section className="flex px-6 w-container m-auto min-h-[calc(100vh-theme(height.header))]">
    <div className="w-80 py-8 pr-4 border-r-2">
      <Input placeholder="Search posts..." suffix={<FiSearch />} />
      <section className="py-4">
        <h3>Filters</h3>
        {tags.map((tag) => (
          <Tag name={tag.tagName} key={tag.id} />
        ))}
      </section>
    </div>
    <div className="grow py-9 px-5">
      <h1 className="text-4xl mb-4">All posts</h1>
      <dt>See what&apos;s new on the blog</dt>
      <div className="mt-4">
        {blogs.map((blog) => {
          const avatar = { alt: blog.title }
          return (
            <BlogOverview
              title={blog.title}
              date={blog.time}
              key={blog.id}
              badge={blog.badge}
              avatar={avatar}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptate nulla
              assumenda iure vero nam in id aperiam rerum ab.
            </BlogOverview>
          )
        })}
      </div>
      <div className="text-center">
        <Button variant={Variant.Outline}>LOADING MORE POSTS</Button>
      </div>
    </div>
  </section>
)

export default SearchBlogs

import Head from 'next/head'
import Layout from '@/application/Layout'
import { NextPage } from 'next'
import Input from '@/components/Input'
import { FiSearch } from 'react-icons/fi'
import Button, { Variant } from '@/components/Button'
import BlogOverview from '@/application/BlogOverview'
import Tag from './components/Tag'

const TAGS = [
  { tagName: 'Account', id: '1' },
  { tagName: 'Projects', id: '2' },
  { tagName: 'Teams', id: '3' },
]

const BLOGS = [
  { title: 'Blog 1', badge: 'Badge 1', time: 'Jan 7 2023', id: 1 },
  { title: 'Blog 2', badge: 'Badge 2', time: 'Jan 17 2023', id: 2 },
  { title: 'Blog 3', badge: 'Badge 3', time: 'Jan 27 2023', id: 3 },
]

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Tech blog</title>
      <meta name="description" content="A blog specialized in technology" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <section className="flex px-6 w-container m-auto min-h-[calc(100vh-theme(height.header))]">
        <div className="w-80 py-8 pr-4 border-r-2">
          <Input placeholder="Search posts..." suffix={<FiSearch />} />
          <section className="py-4">
            <h3>Filters</h3>
            {TAGS.map((tag) => (
              <Tag name={tag.tagName} key={tag.id} />
            ))}
          </section>
        </div>
        <div className="grow py-9 px-5">
          <h1 className="text-4xl mb-4">All posts</h1>
          <dt>See what&apos;s new on the blog</dt>
          <div className="mt-4">
            {BLOGS.map((blog) => {
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
    </Layout>
  </>
)

export default HomePage

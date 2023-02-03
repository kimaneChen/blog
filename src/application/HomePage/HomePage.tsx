import Head from 'next/head'
import Layout from '@/application/Layout'
import { NextPage } from 'next'
import Input from '@/components/Input'
import { FiSearch } from 'react-icons/fi'
import Tag from './components/Tag'

const TAGS = [
  { tagName: 'Account', id: '1' },
  { tagName: 'Projects', id: '2' },
  { tagName: 'Teams', id: '3' },
]

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Tech blog</title>
      <meta name="description" content="A blog specialized in technology" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <section className="flex px-6 max-w-container min-h-[calc(100vh-theme(height.header))]">
        <div className="w-80 py-8 pr-4 border-r-2">
          <Input placeholder="Search posts..." suffix={<FiSearch />} />
          <section className="py-4">
            <h3>Filters</h3>
            {TAGS.map((tag) => (
              <Tag name={tag.tagName} key={tag.id} />
            ))}
          </section>
        </div>
        <section>
          <h1>All posts</h1>
          <div>See what&apos;s new on the blog</div>
        </section>
      </section>
    </Layout>
  </>
)

export default HomePage

import { NextPage } from 'next'
import UserLayout from '@/application/UserLayout'
import SearchBlogsPage from '@/application/SearchBlogs'
import Head from 'next/head'

const TAGS = [
  { tagName: 'Account', id: '1' },
  { tagName: 'Projects', id: '2' },
  { tagName: 'Teams', id: '3' },
]

const BLOGS = [
  {
    id: 'cldspt6gt000cxhd1bcwt0qtq',
    createdAt: '2023-02-06T11:13:40.719Z',
    updatedAt: '2023-02-06T11:13:40.719Z',
    userId: 'cldspt6gt000axhd10y0o00kk',
    title: 'Advanced GraphQL Techniques',
    description:
      'Tips and tricks for working with GraphQL, including how to write complex queries, handle authentication, and deal with errors.',
  },
  {
    id: 'cldspt6ic000lxhd1j5n536y8',
    createdAt: '2023-02-06T11:13:40.719Z',
    updatedAt: '2023-02-06T11:13:40.719Z',
    userId: 'cldspt6ic000kxhd18jrjha62',
    title: 'How to Build a Simple REST API with Django',
    description:
      'This article will provide a step-by-step guide on building a simple REST API using Django, a popular web framework for Python. It will cover the basics of REST API design, the setup of a Django project, and the creation of views, serializers, and URL patterns.',
  },
  {
    id: 'cldspt6ic000mxhd1lsijoyxn',
    createdAt: '2023-02-06T11:13:40.719Z',
    updatedAt: '2023-02-06T11:13:40.719Z',
    userId: 'cldspt6ic000kxhd18jrjha62',
    title: "Getting Started with Machine Learning: A Beginner's Guide",
    description:
      'This article is an introduction to machine learning for those who are new to the field. It will cover the basics of what machine learning is, the types of problems it can solve, and how to get started with your first machine learning project.',
  },
]

const UserBlogsPage: NextPage = () => (
  <>
    <Head>
      <title>My blogs</title>
    </Head>
    <UserLayout>
      <SearchBlogsPage
        title="My blogs"
        isLoadMoreDisabled
        onLoadMore={() => {}}
        tags={TAGS}
        blogs={BLOGS}
      />
    </UserLayout>
  </>
)

export default UserBlogsPage

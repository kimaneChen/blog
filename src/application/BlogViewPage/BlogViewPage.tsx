import { NextPage } from 'next'
import Header from '@/application/Header'
import Contents from './components/Contents'
import AddComments from './components/AddComments'
import Comments from './components/Comments'

const BlogViewPage: NextPage = () => (
  <>
    <Header />

    <main className="px-3 pb-5 flex flex-col items-center">
      <div className="w-narrow">
        <Contents />
        <AddComments />
        <Comments />
        <Comments />
      </div>
    </main>
  </>
)

export default BlogViewPage

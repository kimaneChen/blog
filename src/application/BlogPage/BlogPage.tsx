import { NextPage } from 'next'
import Header from '@/application/Header'
import ActionButtons from './components/ActionButtons'
import FieldSet from './components/FieldSet'

const BlogPage: NextPage = () => (
  <>
    <Header />
    <main className="bg-[#EEF5FA] min-h-[calc(100vh-theme(height.header))] px-3 pb-5 flex flex-col items-center">
      <div className="w-full max-w-narrow grow flex flex-col">
        <ActionButtons />
        <FieldSet />
      </div>
    </main>
  </>
)

export default BlogPage

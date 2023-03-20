import Header from '@/application/Header'
import Loading from '@/components/Loading'
import useBlog from '@/hooks/useBlog'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Form from './components/Form'

const BlogEditorPage: NextPage = () => {
  const { data: session } = useSession()
  const { blog, isLoading } = useBlog()

  if (blog && session?.user?.email !== blog.user?.email) {
    return <div>NOT FOUND</div>
  }

  if (isLoading) {
    return (
      <div className="h-[700px] flex items-center justify-center">
        <Loading />
      </div>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-theme(height.header))] px-3 pb-5 flex flex-col items-center">
        <Form defaultValues={blog} />
      </main>
    </>
  )
}

export default BlogEditorPage

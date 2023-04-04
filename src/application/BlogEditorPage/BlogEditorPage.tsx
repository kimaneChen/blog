import Loading from '@/components/Loading'
import useBlog from '@/hooks/useBlog'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Layout from '@/application/Layout'
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
    <Layout>
      <main className="xl:w-[960px] max-w-[960px] mx-auto">
        <Form defaultValues={blog} />
      </main>
    </Layout>
  )
}

export default BlogEditorPage

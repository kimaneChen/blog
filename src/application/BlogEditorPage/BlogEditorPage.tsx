import { NextPage } from 'next'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import Header from '@/application/Header'
import createBlog, { Data } from '@/apis/createBlog'
import { useSession } from 'next-auth/react'
import ActionButtons from './components/ActionButtons'
import FieldSet from './components/FieldSet'

const BlogEditorPage: NextPage = () => {
  const { data: session } = useSession()

  const onSubmit: SubmitHandler<Data> = async (data) => {
    if (!session) {
      return
    }

    try {
      const response = await createBlog(data)

      // TODO: Success Handling
      console.log(response)
    } catch (error) {
      // TODO: Error Handling
      console.log(error)
    }
  }

  const form = useForm<Data>()
  const { handleSubmit } = form

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...form}>
      <Header />
      <main className="bg-[#EEF5FA] min-h-[calc(100vh-theme(height.header))] px-3 pb-5 flex flex-col items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-narrow grow flex flex-col">
          <ActionButtons />
          <FieldSet />
        </form>
      </main>
    </FormProvider>
  )
}

export default BlogEditorPage

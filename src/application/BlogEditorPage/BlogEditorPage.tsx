import createBlog from '@/apis/createBlog'
import Header from '@/application/Header'
import { Blog } from '@/schemas/Blog'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import ActionButtons from './components/ActionButtons'
import FieldSet from './components/FieldSet'

const BlogEditorPage: NextPage = () => {
  const { data: session } = useSession()

  const [tags, setTags] = useState<string[]>([])

  const onSubmit: SubmitHandler<Blog> = async (data) => {
    if (!session) {
      return
    }

    try {
      const response = await createBlog({
        ...data,
        tags,
      })

      // TODO: Success Handling
      console.log(response)
    } catch (error) {
      // TODO: Error Handling
      console.log(error)
    }
  }

  const form = useForm<Extract<Blog, 'title' | 'description'>>()
  const { handleSubmit } = form

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...form}>
      <Header />
      <main className="bg-[#EEF5FA] min-h-[calc(100vh-theme(height.header))] px-3 pb-5 flex flex-col items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-narrow grow flex flex-col">
          <ActionButtons />
          <FieldSet tags={tags} onTagsChange={setTags} />
        </form>
      </main>
    </FormProvider>
  )
}

export default BlogEditorPage

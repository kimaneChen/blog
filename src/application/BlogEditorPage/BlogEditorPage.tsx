import EditorJS from '@editorjs/editorjs'
import createBlog from '@/apis/createBlog'
import Header from '@/application/Header'
import { Blog } from '@/schemas/Blog'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRef, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import useSWRMutation from 'swr/mutation'
import { useRouter } from 'next/router'
import { useNotification } from '@/context/NotificationContext'
import ActionButtons from './components/ActionButtons'
import FieldSet from './components/FieldSet'

const BlogEditorPage: NextPage = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const [tags, setTags] = useState<string[]>([])

  const { setMessage } = useNotification()

  const { trigger, isMutating } = useSWRMutation('/api/user/blogs', (_, { arg: data }) =>
    createBlog({
      ...data,
      tags,
    })
  )

  const editor = useRef<EditorJS | undefined>()
  const handleEditorInitialize = (instance: EditorJS): void => {
    editor.current = instance
  }

  const onSubmit: SubmitHandler<Blog> = async (data) => {
    if (!session?.user) {
      return
    }

    try {
      const content = await editor.current?.save()
      const response = await trigger({ ...data, content })
      if (response?.status === 200) {
        router.push(`/blogs/${response.data?.id}`)
        setMessage('Published successfully')
      }
    } catch (error) {
      // TODO: Error Handling
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  const form = useForm<Extract<Blog, 'title' | 'description'>>()
  const { handleSubmit } = form

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...form}>
      <Header />
      <main className="min-h-[calc(100vh-theme(height.header))] px-3 pb-5 flex flex-col items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-narrow grow flex flex-col">
          <ActionButtons onConfirmPublish={handleSubmit(onSubmit)} isLoading={isMutating} />
          <FieldSet
            tags={tags}
            onTagsChange={setTags}
            onEditorInitialize={handleEditorInitialize}
          />
        </form>
      </main>
    </FormProvider>
  )
}

export default BlogEditorPage

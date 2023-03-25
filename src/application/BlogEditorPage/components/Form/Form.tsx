import createBlog from '@/apis/createBlog'
import updateBlog from '@/apis/updateBlog'
import { useNotification } from '@/context/NotificationContext'
import Blog from '@/types/Blog'
import EditorJS from '@editorjs/editorjs'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FC, useRef, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { mutate } from 'swr'
import ActionButtons from './components/ActionButtons'
import FieldSet from './components/FieldSet'

interface Props {
  defaultValues?: Blog
}

type FormValues = Pick<Blog, 'title' | 'description'>

const Form: FC<Props> = ({ defaultValues = undefined }) => {
  const { data: session } = useSession()
  const router = useRouter()

  const [isEditorDirty, setIsEditorDirty] = useState(false)
  const [tags, setTags] = useState<string[]>(defaultValues?.tags?.map((tag) => tag.name) || [])

  const { setMessage } = useNotification()

  const editor = useRef<EditorJS | undefined>()
  const handleEditorInitialize = (instance: EditorJS): void => {
    editor.current = instance
  }

  const [isMutating, setIsMutating] = useState(false)

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!session?.user) {
      return
    }

    setIsMutating(true)

    try {
      const content = await editor.current?.save()
      const blog = { ...data, content, tags }

      const handler = defaultValues
        ? () => updateBlog(defaultValues.id, blog)
        : () => createBlog(blog)

      const response = await handler()

      mutate(`/api/blogs/${response.data?.id}`)
      mutate('/api/user/blogs')

      router.push(`/blogs/${response.data?.id}`)
      setMessage('Published successfully')
    } catch (error) {
      // TODO: Error Handling
      // eslint-disable-next-line no-console
      console.log(error)
    }

    setIsMutating(false)
  }

  const form = useForm<FormValues>({ defaultValues })
  const { handleSubmit } = form

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-narrow grow flex flex-col">
        <ActionButtons
          onConfirmPublish={handleSubmit(onSubmit)}
          isLoading={isMutating}
          isEditorDirty={isEditorDirty}
        />
        <FieldSet
          content={defaultValues?.content}
          tags={tags}
          onTagsChange={setTags}
          onEditorInitialize={handleEditorInitialize}
          onEditorChange={() => setIsEditorDirty(true)}
        />
      </form>
    </FormProvider>
  )
}

export default Form

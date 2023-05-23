import Blog from '@/types/Blog'
import EditorJS, { API } from '@editorjs/editorjs'
import dynamic from 'next/dynamic'
import { FC, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import Tags from './components/Tags'
import Textarea from './components/Textarea'

const EditorBlock = dynamic(() => import('@/components/Editor'), {
  ssr: false,
})

interface Props {
  tags: string[]
  onTagsChange: (tags: string[]) => void
  onEditorInitialize: (instance: EditorJS) => void
  content?: Blog['content']
  onEditorChange: (api: API) => void
}

const FieldSet: FC<Props> = ({
  tags,
  onTagsChange,
  onEditorInitialize,
  content = undefined,
  onEditorChange,
}) => {
  const { register } = useFormContext()

  useEffect(() => {
    document.getElementById('title')?.focus()
    document.getElementById('description')?.focus()
  }, [])

  return (
    <div className="bg-background px-6">
      <Textarea
        className="block focus:outline-none placeholder:text-placeholder-500 text-[2rem] py-3"
        placeholder="Give this blog a title"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('title', {
          required: true,
        })}
        id="title"
      />
      <Textarea
        className="block focus:outline-none placeholder:text-placeholder-400 py-3"
        placeholder="A short description to attract others attention"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('description')}
        id="description"
      />
      <Tags tags={tags} onTagsChange={onTagsChange} />
      <hr className="border-t-2 border-outline mb-3" />
      <div className="prose max-w-none min-h-[480px] sm:pl-12 xl:pl-0">
        <EditorBlock onInitialize={onEditorInitialize} data={content} onChange={onEditorChange} />
      </div>
    </div>
  )
}

export default FieldSet

import Blog from '@/types/Blog'
import EditorJS, { API } from '@editorjs/editorjs'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import Textarea from '@/components/Textarea'
import Tags from './components/Tags'

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

  return (
    <div className="bg-background px-6">
      <Textarea
        className="block focus:outline-none placeholder:text-placeholder-500 font-bold text-3xl md:text-4xl py-3"
        placeholder="Give this blog a title"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('title', {
          required: true,
        })}
      />
      <Textarea
        className="block focus:outline-none placeholder:text-placeholder-400 md:text-lg py-3"
        placeholder="A short description to attract others attention"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('description')}
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

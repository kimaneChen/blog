import EditorJS from '@editorjs/editorjs'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import dynamic from 'next/dynamic'
import Tags from './components/Tags'
import Textarea from './components/Textarea'

const EditorBlock = dynamic(() => import('./components/Editor'), {
  ssr: false,
})

interface Props {
  tags: string[]
  onTagsChange: (tags: string[]) => void
  onEditorInitialize: (instance: EditorJS) => void
}

const FieldSet: FC<Props> = ({ tags, onTagsChange, onEditorInitialize }) => {
  const { register } = useFormContext()

  return (
    <div className="bg-background py-16 px-20 grow flex flex-col">
      <Textarea
        className="block focus:outline-none placeholder:text-placeholder-500 text-[2rem] mb-3"
        placeholder="Give this blog a title"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('title', {
          required: true,
        })}
      />
      <Textarea
        className="block focus:outline-none placeholder:text-placeholder-400 mb-2"
        placeholder="A short description to attract others attention"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('description')}
      />
      <Tags tags={tags} onTagsChange={onTagsChange} />
      <hr className="border-t-2 border-outline mb-5" />
      <div className="prose max-w-none">
        <EditorBlock onInitialize={onEditorInitialize} />
      </div>
    </div>
  )
}

export default FieldSet

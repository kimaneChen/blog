import EditorJS from '@editorjs/editorjs'
import dynamic from 'next/dynamic'
import { FC, useRef } from 'react'
import useBlog from '../../../../hooks/useBlog'

const EditorBlock = dynamic(() => import('@/components/Editor'), {
  ssr: false,
})

const Article: FC = () => {
  const { blog } = useBlog()
  const editor = useRef<EditorJS | undefined>()
  const handleEditorInitialize = (instance: EditorJS): void => {
    editor.current = instance
  }

  if (!blog) {
    return null
  }

  return (
    <article className="min-w-[780px] min-h-[800px] pr-[60px] prose">
      <EditorBlock onInitialize={handleEditorInitialize} data={blog.content} readOnly />
    </article>
  )
}

export default Article

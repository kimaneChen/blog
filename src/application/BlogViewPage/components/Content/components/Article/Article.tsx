import EditorJS from '@editorjs/editorjs'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useRef } from 'react'
import useBlog from '../../../../hooks/useBlog'

const EditorBlock = dynamic(() => import('@/components/Editor'), {
  ssr: false,
})

const Article: FC = () => {
  const { blog } = useBlog()
  const editor = useRef<EditorJS | undefined>()
  const { query } = useRouter()
  const handleEditorInitialize = (instance: EditorJS): void => {
    editor.current = instance
  }
  const handleEditorOnReady = (): void => {
    if (query.scrollTo) {
      document.getElementById(query.scrollTo as string)?.scrollIntoView()
    }
  }

  if (!blog) {
    return null
  }

  return (
    <article className="min-w-[780px] pr-[60px] prose">
      <EditorBlock
        onInitialize={handleEditorInitialize}
        data={blog.content}
        readOnly
        onReady={handleEditorOnReady}
      />
    </article>
  )
}

export default Article

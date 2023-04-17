import EditorJS from '@editorjs/editorjs'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useRef } from 'react'
import useBlog from '@/hooks/useBlog'

const EditorBlock = dynamic(() => import('@/components/Editor'), {
  ssr: false,
})

const Article: FC = () => {
  const { blog } = useBlog()
  const editor = useRef<EditorJS | undefined>()
  const { query } = useRouter()
<<<<<<< HEAD

=======
>>>>>>> ad6ac005cecf9835023522640f4bba246028e1be
  const handleEditorInitialize = (instance: EditorJS): void => {
    editor.current = instance
  }
  const handleEditorOnReady = (): void => {
    if (query.scrollTo) {
      document.getElementById(query.scrollTo as string)?.scrollIntoView()
    }
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
<<<<<<< HEAD
    <article className="min-w-[350px] md:min-w-[700px] prose md:pr-9">
=======
    <article className="min-w-[780px] pr-[60px] prose">
>>>>>>> ad6ac005cecf9835023522640f4bba246028e1be
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

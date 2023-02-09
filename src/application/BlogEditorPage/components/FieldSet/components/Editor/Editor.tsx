import EditorJS from '@editorjs/editorjs'
import { FC, memo, useEffect, useRef } from 'react'
import tools from './tools'

const HOLDER = 'editorjs-container'

const EditorBlock: FC = () => {
  const ref = useRef<EditorJS>()

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: HOLDER,
        tools,
      })
      ref.current = editor
    }
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy()
      }
    }
  }, [])

  return <div id={HOLDER} />
}

const Editor = memo(EditorBlock)

export default Editor

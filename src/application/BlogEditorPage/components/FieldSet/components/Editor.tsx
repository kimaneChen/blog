import React, { memo, useEffect, useRef, FC } from 'react'
import EditorJS from '@editorjs/editorjs'
import tools from './Tools'

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

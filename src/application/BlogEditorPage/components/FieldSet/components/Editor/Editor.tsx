import EditorJS from '@editorjs/editorjs'
import { FC, useEffect, useRef } from 'react'
import tools from './tools'

const HOLDER = 'editorjs-container'

interface Props {
  onInitialize: (instance: EditorJS) => void
}

const Editor: FC<Props> = ({ onInitialize }) => {
  const ref = useRef<EditorJS>()

  useEffect(() => {
    if (!ref.current) {
      const instance = new EditorJS({
        holder: HOLDER,
        tools,
      })
      ref.current = instance

      onInitialize(instance)
    }
    return () => {
      if (ref.current?.destroy) {
        ref.current.destroy()
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div id={HOLDER} />
}

export default Editor

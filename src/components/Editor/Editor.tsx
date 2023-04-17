import EditorJS, { API, OutputData } from '@editorjs/editorjs'
import { FC, useEffect, useRef } from 'react'
import { editableTools, readOnlyTools } from './tools'

const HOLDER = 'editorjs-container'

interface Props {
  onInitialize: (instance: EditorJS) => void
  readOnly?: boolean
  data?: OutputData | undefined
  onReady?: () => void | undefined
<<<<<<< HEAD
  onChange?: (api: API) => void
=======
>>>>>>> ad6ac005cecf9835023522640f4bba246028e1be
}

const Editor: FC<Props> = ({
  onInitialize,
  readOnly = false,
  data = undefined,
  onReady = undefined,
<<<<<<< HEAD
  onChange = undefined,
=======
>>>>>>> ad6ac005cecf9835023522640f4bba246028e1be
}) => {
  const ref = useRef<EditorJS>()
  const tools = readOnly ? readOnlyTools : editableTools

  useEffect(() => {
    if (!ref.current) {
      const instance = new EditorJS({
        holder: HOLDER,
        tools,
        readOnly,
        data,
        onReady,
<<<<<<< HEAD
        onChange,
=======
>>>>>>> ad6ac005cecf9835023522640f4bba246028e1be
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

  return <div id={HOLDER} className="-mb-14" />
}

export default Editor

import Code from '@editorjs/code'
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image'
import LinkTool from '@editorjs/link'
import List from '@editorjs/list'
import Paragraph from '@editorjs/paragraph'
import Quote from '@editorjs/quote'
import MathTex from 'editorjs-math'

interface Tools {
  [key: string]: any
}

export const readOnlyTools: Tools = {
  code: Code,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      placeholder: 'Change the world from now on',
    },
  },

  heading: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a Header',
      levels: [1, 2, 3, 4],
      defaultLevel: 1,
    },
  },
  list: {
    class: List,
    inlineToolbar: true,
    config: {
      defaultStyle: 'unordered',
    },
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: "Quote's author",
    },
  },
  linkTool: {
    class: LinkTool,
  },
  image: {
    class: ImageTool,
  },
  math: {
    class: MathTex,
  },
}

export const editableTools: Tools = {
  ...readOnlyTools,
  inlineToolbar: ['bold', 'italic'],
}

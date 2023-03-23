import { FC, ReactNode, ComponentType } from 'react'
import ReactMarkdown from 'react-markdown'

interface Components {
  [key: string]: ComponentType<{ children: ReactNode }>
}

const LegalMarkdownStyledComponents: Components = {
  h2: ({ children }) => <h2 className="text-lg font-bold"> {children} </h2>,
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
}

interface Props {
  children: string
}

const LegalMarkdown: FC<Props> = ({ children }) => (
  <ReactMarkdown components={LegalMarkdownStyledComponents}>{children}</ReactMarkdown>
)

export default LegalMarkdown

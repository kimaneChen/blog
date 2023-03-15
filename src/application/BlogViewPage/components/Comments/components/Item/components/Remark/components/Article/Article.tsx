import Comment from '@/types/Comment'
import { FC, ReactNode } from 'react'

interface Props {
  content: Comment['content']
  header: ReactNode
}

const Article: FC<Props> = ({ content, header }) => (
  <>
    <h2 className="font-bold flex items-center gap-2.5">{header}</h2>
    <p className="pt-1 pb-2">{content}</p>
  </>
)

export default Article

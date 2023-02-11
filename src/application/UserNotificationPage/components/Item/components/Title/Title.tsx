import { FC, ReactNode } from 'react'
import InlineComment from '@/components/InlineComment'

interface Props {
  children: ReactNode
  inline?: string
}

const Title: FC<Props> = ({ children, inline }) => (
  <div className="flex">
    <title className="block font-medium mb-1.5 flex gap-1">
      {inline && (
        <>
          <InlineComment>{inline}</InlineComment>
          <div>|</div>
        </>
      )}
      {children}
    </title>
  </div>
)

export default Title

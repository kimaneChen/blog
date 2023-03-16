import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  reference: ReactNode
}

const Quote: FC<Props> = ({ children, reference }) => (
  <div>
    <p className="mb-1">{children}</p>
    <p className="text-sm text-on-background before:border-l-4 before:rounded-lg before:h-full before:mr-1">
      {reference}
    </p>
  </div>
)

export default Quote

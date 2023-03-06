import { FC } from 'react'

export interface Props {
  title?: string
  comment: string
}

const Item: FC<Props> = ({ title, comment }) => (
  <div className="px-7 py-3 mb-3 bg-background-variant rounded-xl">
    <div className="mb-2 text-lg font-medium mb-2">{title}</div>
    <div>{comment}</div>
  </div>
)

export default Item

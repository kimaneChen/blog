import { FC, ReactNode } from 'react'
import Notification from '@/types/Notification'
import Title from './components/Title'
import Response from './components/Response'

export interface Props {
  title: ReactNode
  inline?: string
  responses: Notification['responses']
}

const Item: FC<Props> = ({ title, inline, responses }) => (
  <div className="mt-6">
    <Title inline={inline}>{title}</Title>
    {responses.map((item) => (
      <Response
        avatar={item?.avatar}
        inline={item?.inline}
        type={item.type}
        relativeTime={item.relativeTime}
        isChecked={item.isChecked}
        key={item.id}
      >
        {item.content}
      </Response>
    ))}
  </div>
)

export default Item

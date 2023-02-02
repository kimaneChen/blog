import { FC } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

export interface Props {
  title: string
  content: string
}

const Feature: FC<Props> = ({ title, content }) => (
  <div className="mb-5 grid grid-cols-12">
    <div className="w-6 py-2 px-1">
      <AiFillCheckCircle className="text-primary w-5 h-5" />
    </div>
    <h2 className="col-span-11 text-2xl font-medium">{title}</h2>
    <div />
    <div className="col-span-11 text-on-background">{content}</div>
  </div>
)

export default Feature

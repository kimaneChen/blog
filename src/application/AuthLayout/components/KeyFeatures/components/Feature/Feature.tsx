import { FC } from 'react'
import { FiCheckCircle } from 'react-icons/fi'

export interface Props {
  title: string
  content: string
}

const Feature: FC<Props> = ({ title, content }) => (
  <div className="mb-5 grid grid-cols-12">
    <div className="w-8 py-1 pr-2">
      <FiCheckCircle className="text-primary w-6 h-6" />
    </div>
    <h2 className="col-span-11 text-2xl font-medium">{title}</h2>
    <div />
    <div className="col-span-11 text-on-background">{content}</div>
  </div>
)

export default Feature

import { FC } from 'react'

interface Props {
  placeholder?: string
}

const Input: FC<Props> = ({ placeholder }) => (
  <input type="text" placeholder={placeholder} className="w-full h-12 px-4 border rounded-md" />
)

export default Input

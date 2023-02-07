import Button from '@/components/Button'
import Router from 'next/router'
import { FC, ReactNode } from 'react'
import { FaArrowLeft } from 'react-icons/fa'

interface Props {
  children: ReactNode
  href: string
}

const OtherOptionsButton: FC<Props> = ({ children, href }) => (
  <Button onClick={() => Router.push(href)} block>
    <div className="flex items-center gap-2 justify-center">
      <FaArrowLeft className="text-lg" />
      {children}
    </div>
  </Button>
)

export default OtherOptionsButton

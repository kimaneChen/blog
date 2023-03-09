import Button from '@/components/Button'
import Router from 'next/router'
import { FC, ReactNode } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

interface Props {
  children: ReactNode
  href: string
}

const OtherOptionsButton: FC<Props> = ({ children, href }) => (
  <Button onClick={() => Router.push(href)} block>
    <div className="flex items-center gap-2 justify-center text-link">
      <FiArrowLeft className="text-lg" />
      {children}
    </div>
  </Button>
)

export default OtherOptionsButton

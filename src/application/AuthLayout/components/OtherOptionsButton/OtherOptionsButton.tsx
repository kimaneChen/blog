import { FC, ReactNode } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import Button, { Variant } from '@/components/Button'
import Router from 'next/router'

interface Props {
  children: ReactNode
  href: string
}

const OtherOptionsButton: FC<Props> = ({ children, href }) => (
  <Button variant={Variant.Primary} onClick={() => Router.push(href)} block>
    <div className="flex items-center gap-2 justify-center">
      <FaArrowLeft className="text-lg" />
      {children}
    </div>
  </Button>
)

export default OtherOptionsButton

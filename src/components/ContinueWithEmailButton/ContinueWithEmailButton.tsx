import Button from '@/components/Button'
import Router from 'next/router'
import { FC } from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface Props {
  href: string
}
const ContinueWithEmailButton: FC<Props> = ({ href }) => (
  <Button onClick={() => Router.push(href)} block>
    <div className="flex items-center gap-2 justify-center">
      Continue With Email
      <FaArrowRight className="text-lg" />
    </div>
  </Button>
)

export default ContinueWithEmailButton

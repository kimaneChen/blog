import { FC } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Button, { Variant } from '@/components/Button'
import Router from 'next/router'

interface Props {
  href: string
}
const ContinueWithEmailButton: FC<Props> = ({ href }) => (
  <Button variant={Variant.Primary} onClick={() => Router.push(href)} block>
    <div className="flex items-center gap-2 justify-center">
      Continue With Email
      <FaArrowRight className="text-lg" />
    </div>
  </Button>
)

export default ContinueWithEmailButton

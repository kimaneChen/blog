import Button, { Variant, Size } from '@/components/Button'
import { FC } from 'react'
import { FiCheck } from 'react-icons/fi'

const MarkAllReadButton: FC = () => (
  <Button variant={Variant.Dark} size={Size.Small}>
    <div className="flex items-center gap-2 justify-center">
      <FiCheck className="text-white" />
      <div>Mark all as read</div>
    </div>
  </Button>
)

export default MarkAllReadButton

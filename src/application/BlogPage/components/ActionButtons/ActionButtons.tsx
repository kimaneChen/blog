import { FC } from 'react'
import Button, { Variant } from '@/components/Button'

const ActionButtons: FC = () => (
  <div className="flex justify-end gap-3 pt-6 pb-3">
    <Button variant={Variant.Blue}>Publish</Button>
    <Button variant={Variant.Outline}>Close</Button>
  </div>
)

export default ActionButtons

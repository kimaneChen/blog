import { FC } from 'react'
import { IoIosTrash } from 'react-icons/io'
import Button, { Size, Variant } from '@/components/Button'

const Remove: FC = () => (
  <Button variant={Variant.Outline} size={Size.Small} className="flex gap-2 items-center">
    <IoIosTrash fontSize={20} />
    Remove
  </Button>
)

export default Remove

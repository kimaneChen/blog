import { FC } from 'react'
import { IoIosTrash } from 'react-icons/io'
import Button, { Size, Variant } from '@/components/Button'
import useUpdateAvatar from '../../../../hooks/useUpdateAvatar'

const Remove: FC = () => {
  const { handleDelete } = useUpdateAvatar()

  return (
    <Button
      variant={Variant.Outline}
      size={Size.Small}
      className="flex gap-2 items-center"
      onClick={handleDelete}
    >
      <IoIosTrash fontSize={20} />
      Remove
    </Button>
  )
}

export default Remove

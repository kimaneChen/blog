import { FC } from 'react'
import Avatar from '@/components/Avatar'

interface Props {
  name?: string | null
  image?: string | null
}

const Info: FC<Props> = ({ name, image }) => (
  <div className="flex gap-3 mb-12 items-center">
    <Avatar width={30} height={30} alt={name} src={image} />
    <div className="text-xs">{name}</div>
  </div>
)

export default Info

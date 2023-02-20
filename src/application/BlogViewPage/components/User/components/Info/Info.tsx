import { FC } from 'react'
import Avatar from '@/components/Avatar'

interface Props {
  name: string
  image: string
}

const Info: FC<Props> = ({ name, image }) => (
  <div className="flex gap-3 mb-12">
    <Avatar width={30} height={30} alt={name} src={image} />
    <div className="text-xs">
      {name}
      <div className="text-on-background">@Developer</div>
    </div>
  </div>
)

export default Info

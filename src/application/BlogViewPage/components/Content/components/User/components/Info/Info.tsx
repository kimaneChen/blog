import { FC } from 'react'
import Avatar from '@/components/Avatar'
import Occupation from '@/application/BlogViewPage/components/Content/components/User/components/Occupation'

interface Props {
  name?: string | null
  image?: string | null
  occupation?: string | null
}

const Info: FC<Props> = ({ name = undefined, image = undefined, occupation = undefined }) => (
  <div className="flex gap-3 mb-12 items-center">
    <div className="hidden md:block">
      <Avatar width={30} height={30} alt={name} src={image} />
    </div>
    <div className="md:hidden">
      <Avatar width={40} height={40} alt={name} src={image} />
    </div>
    <div className="md:text-xs">
      {name}
      {occupation && <Occupation value={occupation} />}
    </div>
  </div>
)

export default Info

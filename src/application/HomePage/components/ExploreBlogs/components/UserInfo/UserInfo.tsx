import { FC } from 'react'
import classNames from 'classnames'
import User from '@/types/User'
import Avatar from '@/components/Avatar'
import Occupation from '@/application/BlogViewPage/components/Content/components/User/components/Occupation'

interface Props {
  name?: User['name']
  image?: User['image']
  occupation?: User['occupation']
}

const UserInfo: FC<Props> = ({ name = undefined, image = undefined, occupation = undefined }) => {
  const className = classNames('md:min-w-[25%]', 'md:h-[200px]', 'px-3 py-9', 'text-center')

  return (
    <section className={className}>
      <Avatar width={50} height={50} src={image} alt={name} />
      <div className="text-lg font-medium mt-3 w-44 whitespace-normal">{name}</div>
      {occupation && <Occupation value={occupation} className="mt-1" />}
    </section>
  )
}

export default UserInfo

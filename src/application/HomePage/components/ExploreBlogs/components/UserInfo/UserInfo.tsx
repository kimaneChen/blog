import { FC } from 'react'
import classNames from 'classnames'
import User from '@/types/User'
import Avatar from '@/components/Avatar'

interface Props {
  name?: User['name']
  image?: User['image']
}

const UserInfo: FC<Props> = ({ name, image }) => {
  const className = classNames(
    'md:min-w-[25%]',
    'md:h-[200px]',
    'px-8',
    'flex',
    'flex-col',
    'gap-3',
    'justify-center',
    'items-center',
    'text-center'
  )

  return (
    <div className={className}>
      <Avatar width={50} height={50} src={image} alt={name} />
      <p className="text-lg font-medium">{name}</p>
    </div>
  )
}

export default UserInfo

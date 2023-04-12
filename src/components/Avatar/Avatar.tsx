import { FC } from 'react'
import Image from 'next/image'
import defaultAvatar from './assets/default-avatar.svg'

interface Props {
  src?: string | null
  alt?: string | null
  width: number
  height: number
}

const Avatar: FC<Props> = ({ src = undefined, alt = undefined, width, height }) => (
  <Image
    src={src || defaultAvatar}
    alt={alt || 'User Avatar'}
    width={width}
    height={height}
    className="rounded-full inline-block object-cover"
  />
)

export default Avatar

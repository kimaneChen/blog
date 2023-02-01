import { FC } from 'react'
import Image from 'next/image'
import defaultAvatar from './assets/default-avatar.svg'

interface Props {
  src?: string | null
  alt?: string | null
  width: number
  height: number
}

const Avatar: FC<Props> = ({ src, alt, width, height }) => (
  <Image
    src={src || defaultAvatar}
    alt={alt || 'Avatar Placeholder'}
    width={width}
    height={height}
    className="object-cover rounded-full"
  />
)

export default Avatar

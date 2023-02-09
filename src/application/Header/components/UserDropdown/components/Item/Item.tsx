import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

interface Props {
  href: string
  label: string
  active?: boolean
  onMouseEnter: () => void
}

const Item: FC<Props> = ({ href, label, active = false, onMouseEnter }) => {
  const classname = classNames(
    'text-on-background',
    'px-6',
    'py-2',
    'text-left',
    'relative',

    active && [
      'text-dark',
      'bg-background-variant',
      'before:block',
      'before:absolute',
      'before:border-2',
      'before:border-dark',
      'before:right-0',
      'before:top-0',
      'before:bottom-0',
    ]
  )

  return (
    <Link href={href} className={classname} onMouseEnter={onMouseEnter}>
      {label}
    </Link>
  )
}

export default Item

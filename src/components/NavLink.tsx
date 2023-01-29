import Link from 'next/link'
import classNames from 'classnames'
import { FC } from 'react'

interface Props {
  label: string
  value: string
  outline?: boolean
}

const NavLink: FC<Props> = ({ label, value, outline = false }) => {
  const className = classNames(
    'py-1',
    'px-2',
    'text-on-background',
    outline && ['border', 'border-on-background', 'rounded-md']
  )
  return (
    <Link href={value} className={className}>
      {label}
    </Link>
  )
}

export default NavLink

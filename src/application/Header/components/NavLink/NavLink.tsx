import Link from 'next/link'
import classNames from 'classnames'
import { FC } from 'react'

interface Props {
  children: string
  href: string
  outline?: boolean
}

const NavLink: FC<Props> = ({ children, href, outline = false }) => {
  const className = classNames(
    'py-1',
    'px-2',
    'text-on-background',
    outline && ['border', 'border-on-background', 'rounded-md']
  )
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default NavLink

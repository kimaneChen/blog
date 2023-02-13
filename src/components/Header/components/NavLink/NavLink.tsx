import { FC, ReactNode } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

interface Props {
  children: ReactNode
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

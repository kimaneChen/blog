import { FC, ReactNode } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

interface Props {
  href: string
  active?: boolean
  children: ReactNode
}

const NavLink: FC<Props> = ({ href, active = false, children }) => {
  const className = classNames(
    'text-on-background',
    'font-medium',
    'py-2',

    active && [
      'text-dark',
      'relative',
      'after:block',
      'after:absolute',
      'after:w-full',
      'after:border-b-4',
      'after:border-dark',
      'after:mt-3',
    ]
  )

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default NavLink

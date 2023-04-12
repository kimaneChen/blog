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
    'flex',
    'items-center',
    'text-on-background',
    'font-normal',
    'md:font-medium',
    'text-sm',
    'md:text-base',
    'py-2',
    'gap-1',
    'md:gap-2.5',

    active && [
      'text-dark',
      'relative',
      'after:block',
      'after:absolute',
      'after:w-full',
      'after:border-b-2',
      'after:border-primary',
      'after:mt-10',
    ]
  )

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default NavLink

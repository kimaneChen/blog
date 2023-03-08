import { FC, ReactNode } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

export enum Variant {
  Light,
  Dark,
}

interface Props {
  children: ReactNode
  href: string
  variant?: Variant
}

const NavLink: FC<Props> = ({ children, href, variant = Variant.Light }) => {
  const className = classNames(
    'py-1',
    'px-2',
    variant === Variant.Dark && ['bg-dark', 'text-background', 'rounded-md']
  )
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default NavLink

import { FC, ReactNode } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

export enum Variant {
  Light,
  Dark,
  Border,
}

interface Props {
  children: ReactNode
  href: string
  variant?: Variant
}

const NavLink: FC<Props> = ({ children, href, variant = Variant.Light }) => (
  <Link
    href={href}
    className={classNames(
      'px-2',
      'rounded-md',
      variant === Variant.Dark && ['bg-dark', 'text-background'],
      variant === Variant.Border && ['text-on-background', 'border'],
      'block',
      'text-center',
      'py-[9px]',
      'md:py-1'
    )}
  >
    {children}
  </Link>
)

export default NavLink

import { FC, ReactNode } from 'react'
import NextLink from 'next/link'

interface Props {
  children: ReactNode
  href: string
}

const Link: FC<Props> = ({ children, href }) => (
  <div className="flex justify-start items-center text-on-background">
    <NextLink href={href}>{children}</NextLink>
  </div>
)

export default Link

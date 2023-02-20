import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

interface Props {
  children: ReactNode
}

const BackLink: FC<Props> = ({ children }) => (
  <Link href="/" className="mt-1 py-3 flex items-center gap-1.5 text-sm text-on-background">
    <FiArrowLeft className="inline w-4 h-4" />
    {children}
  </Link>
)

export default BackLink

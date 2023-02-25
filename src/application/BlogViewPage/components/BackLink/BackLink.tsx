import { FC } from 'react'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const BackLink: FC = () => (
  <Link href="/" className="mt-1 py-3 flex items-center gap-1 text-sm text-on-background">
    <FiArrowLeft className="inline w-4 h-4" />
    Back to All Blogs
  </Link>
)

export default BackLink

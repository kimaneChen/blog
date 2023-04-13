import { FC } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useRouter } from 'next/router'

const BackLink: FC = () => {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mt-1 py-3 flex items-center gap-1 text-xs text-on-background cursor-pointer"
    >
      <FiArrowLeft className="inline w-4 h-4" />
      Back to Blogs
    </button>
  )
}

export default BackLink

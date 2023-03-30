import { FC } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
import Link from 'next/link'

const Signature: FC = () => (
  <div>
    Made with <AiTwotoneHeart color="#EB367F" className="inline" />
    {' by '}
    <Link href="/about-us" className="text-link">
      MadKangaroo
    </Link>
  </div>
)

export default Signature

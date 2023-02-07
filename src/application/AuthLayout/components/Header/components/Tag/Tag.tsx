import { FC } from 'react'
import Link from 'next/link'
import { AiTwotoneHeart } from 'react-icons/ai'

const Tag: FC = () => (
  <div>
    Made with <AiTwotoneHeart color="#EB367F" className="inline" />
    {' by '}
    <Link className="text-primary" href="/Users/KieraDog">
      KieraDog
    </Link>
  </div>
)
export default Tag

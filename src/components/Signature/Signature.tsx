import { FC } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'

const Signature: FC = () => (
  <div className="text-on-background">
    Made with <AiTwotoneHeart color="#EB367F" className="inline" />
    {' by '}
    <span className="text-dark">MadKangaroo</span>
  </div>
)

export default Signature

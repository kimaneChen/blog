import { FC } from 'react'
import { FiSearch } from 'react-icons/fi'
import NakedInput from '@/components/NakedInput'

const Description: FC = () => (
  <div className="text-center">
    <h1 className="text-8xl font-bold mt-48 mb-14">Make Your Voice Heard</h1>
    <h2 className="text-4xl font-medium mb-14">In-text comments for more connection</h2>
    <div className="max-w-5xl mx-auto mb-14">
      <p className="text-2xl text-on-background leading-loose">
        Chuckroo is a tech blog platform that provide a seamless and engaging experience for tech
        enthusiasts to share their knowledge and connect with others in the community.
      </p>
    </div>
    <div className="max-w-xl mx-auto px-20 mb-14 border border-[#666666] rounded-full">
      <NakedInput
        className="rounded-full py-8  placeholder:text-lg placeholder:font-medium mix-blend-multiply"
        prefix={<FiSearch />}
        type="text"
        placeholder="Search our blogs for a world of inspiration..."
      />
    </div>
  </div>
)

export default Description

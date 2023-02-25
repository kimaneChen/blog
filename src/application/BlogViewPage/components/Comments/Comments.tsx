import { FC } from 'react'
import Avatar from '@/components/Avatar'
import { BsFillEmojiSmileFill, BsDot } from 'react-icons/bs'

const Comments: FC = () => (
  <div className="mb-5 grid grid-cols-12 bg-outline rounded-xl px-3 py-3">
    <div className="flex items-center justify-center">
      <Avatar width={16} height={16} />
    </div>
    <h2 className="col-span-11 text-base font-medium">Lorem ipsum dolor sit amet consectetur.</h2>
    <div />
    <div className="col-span-11 text-on-background flex items-center justify-start">
      <p>4h</p>
      <BsDot />
      <p>Replay</p>
      <BsDot />
      <BsFillEmojiSmileFill />
    </div>
  </div>
)

export default Comments

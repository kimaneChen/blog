import { FC } from 'react'
import Avatar from '@/components/Avatar'
import { BsDot } from 'react-icons/bs'
import IconSmile from '@/components/IconSmile'

const Comments: FC = () => (
  <div className="pl-[200px] pr-72">
    <section className="py-4 px-5 mb-4 bg-background-variant rounded-xl flex gap-3">
      <div>
        <Avatar width={20} height={20} />
      </div>
      <div>
        <div className="font-bold">User Name</div>
        <div className="mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque deleniti culpa
          corporis, molestiae cupiditate repudiandae iure similique id expedita animi sapiente
          dolorum vitae ullam fuga accusamus, ipsum repellendus consequatur!
        </div>
        <div className="text-sm text-on-background flex items-center justify-between">
          <div className="pt-1  flex items-center gap-1">
            <div className="pt-0.5">4h</div>
            <BsDot />
            <div className="pt-0.5">Reply</div>
            <BsDot />
            <div className="pt-0.5">Delete</div>
            <BsDot />
            <IconSmile />
          </div>
          <div className="flex pt-1.5">4 Replies</div>
        </div>
      </div>
    </section>
  </div>
)

export default Comments

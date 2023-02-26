import { FC } from 'react'
import Avatar from '@/components/Avatar'
import { BsDot } from 'react-icons/bs'
import IconSmile from '@/components/IconSmile'
import { useSession } from 'next-auth/react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Comments: FC = () => {
  const { data: session } = useSession()
  return (
    <div className="pl-[200px] pr-72">
      <section className="px-5 py-4 mb-4 bg-background-variant rounded-xl flex gap-3">
        <div>
          <Avatar src={session?.user?.image} alt={session?.user?.name} width={20} height={20} />
        </div>
        <div className="w-full">
          <div className="font-bold">User Name</div>
          <div className="mt-1">
            Lorem ipsum dolor sit amet consectetur This is test result Lorem ipsum dolor sit
          </div>
          <div className="mt-2 text-sm text-on-background flex items-center justify-between">
            <div className="pt-1  flex items-center gap-1">
              <div className="pt-0.5">4h</div>
              <BsDot />
              <div className="pt-0.5">Reply</div>
              <BsDot />
              <div className="pt-0.5">Delete</div>
              <BsDot />
              <IconSmile />
            </div>
            <div className="flex pt-1.5 items-center">
              4 Replies <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Comments

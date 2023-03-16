import { FC } from 'react'
import Image from 'next/image'
import noBlogAlert from './assets/noblog-alert.svg'

const Empty: FC = () => (
  <div className="bg-background-variant min-h-[700px] rounded-lg flex items-center justify-center">
    <div className="text-center">
      <Image src={noBlogAlert} alt="No Blogs" width={48} height={48} className="mb-5 mx-auto" />
      <p className="text-on-background">
        Your blog page is looking a little empty. It&apos;s time to fill it with your amazing
        content. Create a new blog post now!
      </p>
    </div>
  </div>
)

export default Empty

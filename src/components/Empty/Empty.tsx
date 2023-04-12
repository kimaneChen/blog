import { FC } from 'react'
import Image from 'next/image'
import noBlogAlert from './assets/noblog-alert.svg'

interface Props {
  children: string
}

const Empty: FC<Props> = ({ children }) => (
  <div className="bg-background-variant h-[540px] md:min-h-[700px] rounded-lg flex items-center justify-center">
    <div className="text-center">
      <Image src={noBlogAlert} alt="No Blogs" width={48} height={48} className="mb-5 mx-auto" />
      <p className="text-on-background mx-8">{children}</p>
    </div>
  </div>
)

export default Empty

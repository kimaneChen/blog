import { FC } from 'react'
import Image from 'next/image'
import noBlogAlert from './assets/noblog-alert.svg'

const Empty: FC = () => (
  <div className="bg-background-variant min-h-[492px] rounded-lg flex flex-col items-center justify-center">
    <Image src={noBlogAlert} alt="No comments" width={48} height={48} className="mb-5" />
    <p className="text-on-background">You haven&apos;t made any comments yet.</p>
  </div>
)

export default Empty

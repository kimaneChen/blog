import { FC } from 'react'

const DecorationLine: FC = () => (
  <div className="mx-[12.5%] flex">
    <div className="border-r-4 border-dashed h-full relative">
      <div className="absolute top-0 left-0 w-4 h-4 -translate-x-1.5 rounded-full bg-outline" />
      <div className="absolute bottom-0 left-0 w-4 h-4 -translate-x-1.5 rounded-full bg-outline" />
    </div>
  </div>
)

export default DecorationLine

import { FC, useState, useEffect } from 'react'
import { BiRocket } from 'react-icons/bi'

const Loading: FC = () => {
  const [numOfDots, setNumOfDots] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (numOfDots < 3) {
        setNumOfDots((prev) => prev + 1)
      }
    }, 300)

    return () => {
      clearTimeout(timeout)
    }
  }, [numOfDots])

  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-[75vh] text-placeholder">
      <BiRocket className="w-12 h-12" />
      <div className="flex gap-1 w-44 px-12 py-3">
        <div>Loading</div>
        <div className="flex items-end gap-1 pb-1">
          {Array.from({ length: numOfDots }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="w-1 h-1 rounded-full bg-placeholder" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loading

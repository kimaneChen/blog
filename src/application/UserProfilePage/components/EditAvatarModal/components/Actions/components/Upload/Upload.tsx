import { FC, useId } from 'react'
import { IoIosCamera } from 'react-icons/io'

const Upload: FC = () => {
  const userId = useId()

  return (
    <label
      htmlFor={userId}
      className="flex gap-2 items-center px-4 border rounded-md cursor-pointer"
    >
      <IoIosCamera fontSize={20} />
      Upload
      <input id={userId} type="file" accept="image/*" hidden />
    </label>
  )
}

export default Upload

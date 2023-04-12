import { FC, useId } from 'react'
import { IoIosCamera } from 'react-icons/io'
import useUpdateAvatar from '../../../../hooks/useUpdateAvatar'

const Upload: FC = () => {
  const userId = useId()
  const { handleUpload } = useUpdateAvatar()

  return (
    <label
      htmlFor={userId}
      className="flex gap-2 items-center px-4 border rounded-md cursor-pointer"
    >
      <IoIosCamera fontSize={20} />
      Upload
      <input id={userId} type="file" accept="image/*" hidden onChange={handleUpload} />
    </label>
  )
}

export default Upload

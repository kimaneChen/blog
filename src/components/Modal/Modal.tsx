import { FC, ReactNode } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  children: ReactNode
  onClose: () => void
}

const Modal: FC<Props> = ({ children, onClose }) => (
  <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#000000]/50 flex justify-center items-center z-50">
    <div className="relative w-[600px] bg-background rounded px-8 py-7">
      <button type="button" className="absolute right-8 top-7" onClick={onClose}>
        <AiOutlineClose className="w-5 h-5" />
      </button>
      {children}
    </div>
  </div>
)

export default Modal

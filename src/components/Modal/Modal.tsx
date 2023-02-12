import { FC, ReactNode } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  children: ReactNode
  onClose: () => void
  modalClassName: string
  closeBtnClassName: string
}

const Modal: FC<Props> = ({ children, onClose, modalClassName, closeBtnClassName }) => (
  <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#000000]/50 flex justify-center items-center z-50">
    <div className={`relative w-[600px] bg-background rounded ${modalClassName}`}>
      <button type="button" className={`absolute ${closeBtnClassName}`} onClick={onClose}>
        <AiOutlineClose className="w-5 h-5" />
      </button>
      {children}
    </div>
  </div>
)

export default Modal

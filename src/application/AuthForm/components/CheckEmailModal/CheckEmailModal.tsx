import { FC } from 'react'
import Type from '@/types/AuthType'
import Modal, { Overlay, Size } from '@/components/Modal'

interface Props {
  type: Type
  email: string
  onClose: () => void
}

const CheckEmailModal: FC<Props> = ({ type, email, onClose }) => (
  <Modal overlay={Overlay.Light} onClose={onClose} size={Size.ExtraLarge}>
    <div className="flex items-center justify-center w-full h-full py-[98px]">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-5">Email Verification</h2>
        <p className="text-base font-medium text-on-background">
          {type === Type.SignUp && 'Thanks for joining us! '}
          {type === Type.Login && 'Welcome to Chuckroo! '}
          We just sent a link to <span className="text-dark">{email}</span>, please check your
          email.
        </p>
      </div>
    </div>
  </Modal>
)
export default CheckEmailModal

import { FC } from 'react'
import Type from '@/types/AuthType'
import Modal, { Overlay } from '@/components/Modal'

interface Props {
  type: Type
  email: string
  onClose: () => void
}

const CheckEmailModal: FC<Props> = ({ type, email, onClose }) => (
  <Modal overlay={Overlay.Light} onClose={onClose}>
    <div className="flex flex-col justify-center py-14 text-center">
      <h2 className="text-4xl font-bold mb-5">Email Verification</h2>
      <p className="text-base font-medium">
        {type === Type.SignUp && 'Thanks for joining us! '}
        {type === Type.Login && 'Welcome to Chuckroo! '}
        We just sent a link to {email}, please check your email.
      </p>
    </div>
  </Modal>
)
export default CheckEmailModal

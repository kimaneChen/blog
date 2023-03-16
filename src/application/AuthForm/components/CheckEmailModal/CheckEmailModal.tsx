import { FC } from 'react'
import AuthType from '@/types/AuthType'
import Modal, { Overlay, Size } from '@/components/Modal'

interface Props {
  type: AuthType
  email: string
  onClose: () => void
}

const CheckEmailModal: FC<Props> = ({ type, email, onClose }) => (
  <Modal overlay={Overlay.Light} onClose={onClose} size={Size.Large}>
    <div className="flex items-center justify-center w-full h-full py-[98px]">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-5">Email Verification</h2>
        <p className="text-base font-medium text-on-background">
          {type === AuthType.SignUp && 'Thanks for joining us! '}
          {type === AuthType.Login && 'Welcome to Chuckroo! '}
          We just sent a link to <span className="text-dark">{email}</span>, please check your
          email.
        </p>
      </div>
    </div>
  </Modal>
)
export default CheckEmailModal

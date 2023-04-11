import { FC } from 'react'
import AuthType from '@/types/AuthType'
import Modal, { Overlay, Size, Position } from '@/components/Modal'
import Header from '@/application/Header'

interface Props {
  type: AuthType
  email: string
  onClose: () => void
}

const CheckEmailModal: FC<Props> = ({ type, email, onClose }) => (
  <>
    <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
      <Header />
    </div>
    <Modal
      overlay={Overlay.Light}
      onClose={onClose}
      size={Size.Large}
      position={Position.Top}
      block
    >
      <div className="text-center pt-[200px] pb-[450px] md:py-[70px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Email Verification</h2>
        <p className="font-medium text-base text-on-background">
          {type === AuthType.SignUp && 'Thanks for joining us! '}
          {type === AuthType.Login && 'Welcome to Chuckroo! '}
          We just sent a link to <span className="text-dark">{email}</span>, please check your
          email.
        </p>
      </div>
    </Modal>
  </>
)
export default CheckEmailModal

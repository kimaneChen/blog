import { FC, ReactNode } from 'react'
import ResponsiveModal, { Overlay, Position } from '@/components/ResponsiveModal'
import Logo from '@/application/Logo'

interface Props {
  onClose: () => void
  children?: ReactNode
}

const LogoModal: FC<Props> = ({ onClose, children = undefined }) => (
  <ResponsiveModal onClose={onClose} overlay={Overlay.Light} position={Position.Top}>
    <div className="h-16 px-6 py-2 md:hidden">
      <Logo />
    </div>
    {children}
  </ResponsiveModal>
)

export default LogoModal

import { FC } from 'react'
import Toast, { Position, Variant, Size } from '@/components/Toast'

const NotFound: FC = () => (
  <Toast position={Position.Center} variant={Variant.Error} size={Size.ExtraWide}>
    The blog does not exist, cannot be viewed
  </Toast>
)

export default NotFound

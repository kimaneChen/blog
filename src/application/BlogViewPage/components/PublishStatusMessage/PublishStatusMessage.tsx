import { FC } from 'react'
import { useNotification } from '@/context/NotificationContext'
import Toast, { Position, Variant } from '@/components/Toast'

const PublishStatusMessage: FC = () => {
  const { message } = useNotification()

  if (!message) {
    return null
  }

  return (
    <Toast position={Position.Center} variant={Variant.Success}>
      {message}
    </Toast>
  )
}

export default PublishStatusMessage

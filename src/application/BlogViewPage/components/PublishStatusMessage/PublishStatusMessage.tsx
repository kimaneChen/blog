import { FC } from 'react'
import { useNotification } from '@/context/NotificationContext'
import Toast, { Position, Variant } from '@/components/Toast'
import useIsScreen, { Screen } from '@/hooks/useIsScreen'

const PublishStatusMessage: FC = () => {
  const isSmallScreen = useIsScreen(Screen.Small)
  const { message } = useNotification()

  if (!message) {
    return null
  }

  return (
    <Toast position={isSmallScreen ? Position.Right : Position.Center} variant={Variant.Success}>
      {message}
    </Toast>
  )
}

export default PublishStatusMessage

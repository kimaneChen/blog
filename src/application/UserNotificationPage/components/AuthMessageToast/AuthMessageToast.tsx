import { FC, useEffect } from 'react'
import useIsScreen, { Screen } from '@/hooks/useIsScreen'
import { useNotification } from '@/context/NotificationContext'
import LocalStorage from '@/config/LocalStorage/LocalStorage'
import Toast, { Position, Variant } from '@/components/Toast'

const AuthMessageToast: FC = () => {
  const isSmallScreen = useIsScreen(Screen.Small)
  const { message, setMessage } = useNotification()

  useEffect(() => {
    const authMessage = localStorage.getItem(LocalStorage.AuthKey)

    if (authMessage) {
      setMessage(authMessage)
      localStorage.removeItem(LocalStorage.AuthKey)
    }
  }, [setMessage])

  if (!message) {
    return null
  }

  return (
    <Toast position={isSmallScreen ? Position.Center : Position.Right} variant={Variant.Success}>
      {message}
    </Toast>
  )
}

export default AuthMessageToast

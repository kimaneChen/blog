import { FC, useEffect } from 'react'
import { useNotification } from '@/context/NotificationContext'
import Toast, { Position, Variant } from '@/components/Toast'

const AuthMessageToast: FC = () => {
  const { message, setMessage } = useNotification()

  useEffect(() => {
    const authMessage = localStorage.getItem('auth_message')

    if (authMessage) {
      setMessage(authMessage)
      localStorage.removeItem('auth_message')
    }
  }, [setMessage])

  if (!message) {
    return null
  }

  return (
    <Toast position={Position.Right} variant={Variant.Success}>
      {message}
    </Toast>
  )
}

export default AuthMessageToast

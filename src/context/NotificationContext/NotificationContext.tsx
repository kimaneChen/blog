import { FC, ReactNode, createContext, useState, useContext, useMemo, useEffect } from 'react'

interface NotificationContextType {
  message: string | null
  setMessage: (message: string | null) => void
}

interface NotificaitonProviderProps {
  children: ReactNode
}

const NotificationContext = createContext<NotificationContextType>({
  message: null,
  setMessage: () => {},
})

const NotificationProvider: FC<NotificaitonProviderProps> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage(null)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [message])

  const value = useMemo(
    () => ({
      message,
      setMessage,
    }),
    [message]
  )

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
}

export const useNotification = (): NotificationContextType => useContext(NotificationContext)

export default NotificationProvider

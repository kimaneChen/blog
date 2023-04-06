import { useEffect, useState } from 'react'

enum ScreenSize {
  Small = 768,
}

export enum Screen {
  Default,
  Small,
}

const useIsScreen = (screen: Screen): boolean => {
  const [isScreen, setIsScreen] = useState<Screen>(Screen.Default)

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < ScreenSize.Small) {
        setIsScreen(Screen.Small)
      } else {
        setIsScreen(Screen.Default)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isScreen === screen
}

export default useIsScreen

import useClickOutside from '@/hooks/useClickOutside'
import { IoClose } from 'react-icons/io5'
import { FC, ReactNode, useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useIsScreen, { Screen } from '@/hooks/useIsScreen/useIsScreen'
import Cover from '@/components/Cover'

interface Props {
  toggle: ReactNode
  children: ReactNode
}

const Dropdown: FC<Props> = ({ toggle, children }) => {
  const isSmallScreen = useIsScreen(Screen.Small)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()

  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => {
    if (!isSmallScreen) {
      setIsOpen(false)
    }
  })

  useEffect(() => {
    const handleCloseMenu = (): void => {
      setIsOpen(false)
    }

    router.events.on('routeChangeStart', handleCloseMenu)

    return () => {
      router.events.off('routeChangeStart', handleCloseMenu)
    }
  }, [router])

  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {toggle}
      </button>
      {isOpen && <div className="absolute left-0 right-0 hidden md:block">{children}</div>}
      {isOpen && (
        <Cover className="md:hidden">
          <div className="relative">
            <button
              type="button"
              className="absolute right-6 top-6 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <IoClose className="w-5 h-5" />
            </button>
          </div>
          {children}
        </Cover>
      )}
    </div>
  )
}

export default Dropdown

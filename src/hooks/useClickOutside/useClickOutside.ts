import { useEffect, RefObject } from 'react'

const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void): void => {
  const handler = (e: MouseEvent): void => {
    if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  })
}

export default useClickOutside

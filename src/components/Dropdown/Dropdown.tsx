import useClickOutside from '@/hooks/useClickOutside'
import { FC, ReactNode, useRef, useState } from 'react'

interface Props {
  toggle: ReactNode
  children: ReactNode
}

const Dropdown: FC<Props> = ({ toggle, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setIsOpen(false))

  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {toggle}
      </button>
      <div className="absolute left-0 right-0">{isOpen && children}</div>
    </div>
  )
}

export default Dropdown

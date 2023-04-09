import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface Props {
  children: ReactNode
  className?: string
}

const Cover: FC<Props> = ({ children, className = undefined }) =>
  ReactDOM.createPortal(
    <div
      className={classNames(
        'fixed',
        'top-0',
        'bottom-0',
        'left-0',
        'right-0',
        'w-full',
        'h-screen',
        'z-50',
        'bg-background',
        'overflow-hidden',
        className
      )}
    >
      {children}
    </div>,
    document.querySelector('#modal') as Element
  )

export default Cover

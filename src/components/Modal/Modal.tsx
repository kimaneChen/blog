/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

export enum Overlay {
  Dark = 'Dark',
  Light = 'Light',
}

export enum Position {
  Center = 'Center',
  Top = 'Top',
}

export enum Size {
  Normal = 'Normal',
  Large = 'Large',
}

interface Props {
  children: ReactNode
  onClose: () => void
  overlay?: Overlay
  size?: Size
  enableCloseButton?: boolean
  position?: Position
}

const Modal: FC<Props> = ({
  children,
  onClose,
  enableCloseButton = false,
  overlay = Overlay.Dark,
  size = Size.Normal,
  position = Position.Center,
}) =>
  ReactDOM.createPortal(
    <div
      className={classNames(
        'fixed',
        'top-0',
        'bottom-0',
        'left-0',
        'right-0',
        'flex',
        'justify-center',
        'z-50',
        overlay === Overlay.Dark && ['bg-[#000000]/50'],
        overlay === Overlay.Light && ['bg-[#fff]/80'],
        position === Position.Center && ['items-center']
      )}
      onClick={onClose}
      onKeyDown={onClose}
    >
      <div
        className={classNames(
          'bg-background',
          'rounded',
          overlay === Overlay.Light && ['drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'],
          size === Size.Normal && ['w-[600px]', 'px-8', 'py-7'],
          size === Size.Large && ['w-[660px]'],
          enableCloseButton && ['relative'],
          position === Position.Top && ['absolute', 'top-[15vh]']
        )}
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
      >
        {enableCloseButton && (
          <button type="button" className="absolute right-8 top-7" onClick={onClose}>
            <AiOutlineClose className="w-5 h-5" />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.querySelector('#modal') as Element
  )

export default Modal

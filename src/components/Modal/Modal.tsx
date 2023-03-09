/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { IoClose } from 'react-icons/io5'

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
  ExtraLarge = 'ExtraLarge',
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
          overlay === Overlay.Light && ['shadow-[0_2px_50px_8px_rgba(234,234,234,1)]'],
          size === Size.Normal && ['w-[600px]', 'px-8', 'py-7'],
          size === Size.Large && ['w-[650px]'],
          size === Size.ExtraLarge && ['w-[900px]'],
          position === Position.Top && ['absolute', 'top-[15vh]']
        )}
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
      >
        {enableCloseButton && (
          <div className="relative">
            <button type="button" className="absolute right-0" onClick={onClose}>
              <IoClose className="w-5 h-5" />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>,
    document.querySelector('#modal') as Element
  )

export default Modal

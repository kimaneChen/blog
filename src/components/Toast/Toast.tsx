import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { BsExclamationCircleFill, BsCheckCircleFill } from 'react-icons/bs'

export enum Position {
  Center,
  Right,
}

export enum Variant {
  Success,
  Error,
}

const ICON = {
  [Variant.Success]: <BsCheckCircleFill fontSize={20} />,
  [Variant.Error]: <BsExclamationCircleFill fontSize={20} />,
}

interface Props {
  children: ReactNode
  position: Position
  variant: Variant
}

const Toast: FC<Props> = ({ children, position, variant }) => (
  <div
    className={classNames(
      'fixed',
      'flex',
      'items-center',
      'gap-3',
      'px-[60px]',
      'py-3',
      'border',
      'rounded-lg',
      'bg-background',
      'text-sm',
      'top-[90px]',

      position === Position.Center && ['left-1/2', 'translate-x-[-50%]'],
      position === Position.Right && ['right-1/2', 'translate-x-[650px]'],
      variant === Variant.Success && ['border-success', 'text-success'],
      variant === Variant.Error && ['border-error', 'text-error']
    )}
  >
    {ICON[variant]}
    {children}
  </div>
)

export default Toast

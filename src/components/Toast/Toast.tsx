import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { BsExclamationCircleFill, BsCheckCircleFill } from 'react-icons/bs'
import useIsScreen, { Screen } from '@/hooks/useIsScreen/useIsScreen'

export enum Position {
  Center,
  Right,
}

export enum Variant {
  Success,
  Error,
}

export enum Size {
  ExtraWide,
}

interface Props {
  children: ReactNode
  position: Position
  variant: Variant
  size?: Size
}

const Toast: FC<Props> = ({ children, position, variant, size = undefined }) => {
  const isSmallScreen = useIsScreen(Screen.Small)
  const ICON = {
    [Variant.Success]: <BsCheckCircleFill size={isSmallScreen ? 16 : 20} />,
    [Variant.Error]: <BsExclamationCircleFill size={isSmallScreen ? 16 : 20} />,
  }

  return (
    <div
      className={classNames(
        'fixed',
        'flex',
        'justify-center',
        'items-center',
        'gap-3',
        'px-4',
        'md:px-[60px]',
        'py-3',
        'border',
        'rounded-lg',
        'bg-background',
        'text-xs',
        'md:text-sm',
        'top-20',
        'md:top-[90px]',

        position === Position.Center && ['left-1/2', 'translate-x-[-50%]'],
        position === Position.Right && [
          'right-0',
          '-translate-x-6',
          'md:right-1/2',
          'md:translate-x-[570px]',
        ],
        variant === Variant.Success && ['border-success', 'text-success'],
        variant === Variant.Error && ['border-error', 'text-error'],
        size === Size.ExtraWide && ['w-96', 'md:w-auto']
      )}
    >
      {ICON[variant]}
      {children}
    </div>
  )
}
export default Toast

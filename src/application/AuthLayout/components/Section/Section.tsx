import classNames from 'classnames'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  position: Position
}

export enum Position {
  Left = 'left',
  Right = 'right',
}

const Section: FC<Props> = ({ children, position }) => (
  <section
    className={classNames(
      'min-h-screen',
      'w-1/2',
      'flex flex-col',
      'justify-center',
      position === Position.Left && ['bg-background-variant items-end']
    )}
  >
    <div
      className={classNames(
        position === Position.Left && ['max-w-[460px]', 'mx-[90px]'],
        position === Position.Right && ['max-w-xs', 'ml-[90px]']
      )}
    >
      {children}
    </div>
  </section>
)

export default Section

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
      'flex',
      'items-center',
      position === Position.Left && ['justify-end', 'bg-background-variant'],
      position === Position.Right && 'justify-start'
    )}
  >
    <div
      className={classNames(
        'mx-32',
        'my-24',
        position === Position.Left && 'w-[600px]',
        position === Position.Right && 'w-80'
      )}
    >
      {children}
    </div>
  </section>
)

export default Section

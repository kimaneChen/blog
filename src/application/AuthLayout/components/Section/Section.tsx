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
      'md:min-h-screen',
      'md:w-1/2',
      'w-full',
      'flex flex-col',
      'justify-center',
      position === Position.Left && ['bg-background-variant top-[560px] md:items-end '],
      position === Position.Right && ['']
    )}
  >
    <div
      className={classNames(
        'mx-auto',
        'px-6',
        'min-w-[300px]',
        'my-[60px]',
        'md:my-0',
        position === Position.Left && ['max-w-[600px] md:mx-[90px]'],
        position === Position.Right && ['w-full max-w-[400px] md:max-w-xs md:ml-[90px]']
      )}
    >
      {children}
    </div>
  </section>
)

export default Section

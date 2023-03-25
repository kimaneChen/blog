import { FC } from 'react'
import classNames from 'classnames'

interface Props {
  value: string
  className?: string
}

const Occupation: FC<Props> = ({ value, className = undefined }) => (
  <div
    className={classNames(
      'truncate hover:overflow-visible hover:whitespace-normal w-44 text-on-background',
      className
    )}
  >
    @{value}
  </div>
)

export default Occupation

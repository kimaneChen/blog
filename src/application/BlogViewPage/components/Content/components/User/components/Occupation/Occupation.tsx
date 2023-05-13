import { FC } from 'react'
import classNames from 'classnames'

interface Props {
  value: string
  className?: string
}

const Occupation: FC<Props> = ({ value, className = undefined }) => (
  <div
    className={classNames(
      'truncate md:overflow-visible md:whitespace-normal hover:overflow-visible hover:whitespace-normal text-on-background',
      className
    )}
  >
    @{value}
  </div>
)

export default Occupation

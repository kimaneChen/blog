import classNames from 'classnames'
import { FC } from 'react'

interface HighlightSearchProps {
  text: string
  search: string
  className?: string
}

const HighlightSearch: FC<HighlightSearchProps> = ({ text, search, className = undefined }) => {
  const regex = new RegExp(`(${search})`, 'gi')
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, i) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className={classNames(regex.test(part) && ['text-primary', className])}
        >
          {part}
        </span>
      ))}
    </>
  )
}

export default HighlightSearch

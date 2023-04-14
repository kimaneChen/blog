import { FC, ReactNode } from 'react'
import classNames from 'classnames'

interface Props {
  children: ReactNode
  reference: ReactNode
  prefix?: ReactNode
}

const Quote: FC<Props> = ({ children, reference, prefix = undefined }) => (
  <div>
    <p className="mb-1">{children}</p>
    <p className="text-sm text-on-background flex">
      {prefix}
      <div
        className={classNames(
          prefix ? '' : ['before:border-l-4', 'before:rounded-lg', 'before:h-full', 'before:mr-1']
        )}
      >
        {reference}
      </div>
    </p>
  </div>
)

export default Quote

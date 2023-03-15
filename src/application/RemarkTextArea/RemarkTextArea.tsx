/* eslint-disable react/require-default-props */
import classNames from 'classnames'
import { forwardRef, FocusEvent } from 'react'

interface Props {
  placeholder: string
  onFocus?: () => void
  onBlur: (event: FocusEvent<HTMLTextAreaElement, Element>) => void
  className?: string | false
}

const RemarkTextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ placeholder, className = null, ...props }, ref) => (
    <textarea
      ref={ref}
      className={classNames(
        'text-sm',
        'focus:outline-none',
        'py-3',
        'leading-6',
        'px-4',
        'w-full',
        'overflow-hidden',
        'block',
        'resize-none',
        'h-[90px]',
        className
      )}
      placeholder={placeholder}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
)

RemarkTextArea.displayName = 'RemarkTextArea'
export default RemarkTextArea

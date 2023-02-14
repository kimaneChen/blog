import classNames from 'classnames'
import { forwardRef } from 'react'
import Input, { Props } from '@/components/Input'

const NakedInput = forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => (
  <Input
    className={classNames('px-0', 'border-0', 'focus:outline-none', className)}
    ref={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
))

NakedInput.displayName = 'NakedInput'
export default NakedInput

import { ChangeEventHandler, forwardRef, useEffect, useCallback } from 'react'
import useForwardRef from '@/hooks/useForwardRef'

interface Props {
  className: string
  placeholder: string
  onChange: ChangeEventHandler
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, placeholder, onChange, ...props }, ref) => {
    const forwardedRef = useForwardRef<HTMLTextAreaElement>(ref)

    const autoSize = useCallback(() => {
      const textarea = forwardedRef.current
      textarea.style.height = '0px'
      textarea.style.height = `${textarea.scrollHeight}px`
    }, [forwardedRef])

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      autoSize()
      onChange(event)
    }

    useEffect(() => {
      autoSize()
    }, [autoSize])

    return (
      <textarea
        ref={forwardedRef}
        className={`resize-none my-3 w-full ${className}`}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={autoSize}
        rows={1}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
export default Textarea

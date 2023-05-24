import { ForwardedRef, MutableRefObject, useEffect, useRef } from 'react'

const useForwardRef = <T>(ref: ForwardedRef<T>, initialValue: any = null): MutableRefObject<T> => {
  const targetRef = useRef<T>(initialValue)

  useEffect(() => {
    if (!ref) {
      return
    }

    if (typeof ref === 'function') {
      ref(targetRef.current)
    } else {
      targetRef.current = ref.current as T
    }
  }, [ref])

  return targetRef
}

export default useForwardRef

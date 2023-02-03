import { NextPage } from 'next'
import { useEffect } from 'react'

const ClosePage: NextPage = () => {
  useEffect(() => {
    if (!window.top) {
      return
    }

    window.top.close()
  }, [])

  return null
}

export default ClosePage

import hiGPT3, { Data } from '@/apis/admin/hiGPT3'
import { AxiosResponse } from 'axios'
import { useMemo, useState } from 'react'

interface Result {
  loading: boolean
  data: string | null
  askGPT3: () => Promise<void>
}

function useAskGPT3(prompt: string): Result {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<AxiosResponse<Data> | undefined>()

  const askGPT3 = async (): Promise<void> => {
    setLoading(true)
    setResponse(await hiGPT3(prompt))
    setLoading(false)
  }

  const data = useMemo<string | null>(() => {
    if (!response) {
      return null
    }

    return response.data.choices[0].message.content
  }, [response])

  return { loading, data, askGPT3 }
}

export default useAskGPT3

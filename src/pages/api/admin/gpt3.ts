import { NextApiHandler } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const GPT3Handler: NextApiHandler = async (req, res) => {
  const prompt = req.body.prompt as string

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 2048,
    temperature: 0.9,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
  })

  res.status(200).json(response.data)
}

export default GPT3Handler

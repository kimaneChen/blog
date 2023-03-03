import { NextApiHandler } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const GPT3Handler: NextApiHandler = async (req, res) => {
  const prompt = req.body.prompt as string

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a front-end tech blog website api, that returns response in JSON format.',
      },
      {
        role: 'system',
        content: 'Your message content should only include JSON response.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: 2048,
    temperature: 0.9,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
  })

  res.status(200).json(response.data)
}

export default GPT3Handler

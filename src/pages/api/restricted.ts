import { NextApiHandler } from 'next'
import { getToken } from 'next-auth/jwt'

const restricted: NextApiHandler = async (req, res) => {
  const token = await getToken({ req })

  if (token) {
    res.send({
      content: 'This is protected content. You can access this content because you are signed in.',
    })
  } else {
    res.send({
      error: 'You must be signed in to view the protected content on this page.',
    })
  }
}

export default restricted

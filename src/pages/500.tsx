import { NextPage } from 'next'
import Link from 'next/link'

const ServerError: NextPage = () => (
  <>
    <h1>500 - Server Error</h1>
    <Link href="/">Go back home</Link>
  </>
)

export default ServerError

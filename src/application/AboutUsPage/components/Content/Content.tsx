import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import about from './assets/about.md'

const Content: FC = () => (
  <article className="max-w-screen-lg mx-auto mt-44 mb-36">
    <h1 className="text-7xl font-extrabold text-center mb-[270px]">About us</h1>
    <div className="prose max-w-none">
      <ReactMarkdown>{about}</ReactMarkdown>
    </div>
  </article>
)

export default Content

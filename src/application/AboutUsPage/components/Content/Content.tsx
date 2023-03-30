import { FC } from 'react'
import LegalMarkdown from '@/application/LegalMarkdown'
import about from './assets/about.md'

const Content: FC = () => (
  <article className="mb-[140px]">
    <h1 className="text-7xl font-extrabold text-center my-[180px]">About us</h1>
    <div className="prose pt-24 max-w-none text-lg">
      <LegalMarkdown>{about}</LegalMarkdown>
    </div>
  </article>
)

export default Content

import Container, { Size } from '@/components/Container'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import about from './assets/about.md'

const Content: FC = () => (
  <article className="mb-[140px]">
    <Container size={Size.Narrow}>
      <h1 className="text-7xl font-extrabold text-center mt-[180px] mb-[280px]">About us</h1>
      <div className="prose max-w-none">
        <ReactMarkdown>{about}</ReactMarkdown>
      </div>
    </Container>
  </article>
)

export default Content

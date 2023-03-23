import Container, { Size } from '@/components/Container'
import { FC, ReactNode } from 'react'
import Layout from '@/application/Layout'

export enum Title {
  Term = 'Term of Service',
  Policy = 'Privacy Policy',
}

interface Props {
  children: ReactNode
  title: Title
}

const LegalMarkdownLayout: FC<Props> = ({ children, title }) => (
  <Layout>
    <Container size={Size.Narrow} className="px-0">
      <div className="mx-auto">
        <div className="py-44">
          <h1 className="text-center text-7xl font-extrabold">{title}</h1>
        </div>
        <div className="pt-24 pb-40 mx-auto">
          <section className="prose max-w-[880px] text-[18px]">{children}</section>
        </div>
      </div>
    </Container>
  </Layout>
)

export default LegalMarkdownLayout

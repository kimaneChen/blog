import Container, { Size, Space } from '@/components/Container'
import { FC, ReactNode } from 'react'
import Layout from '@/application/Layout'

export enum Title {
  Term = 'Term of Service',
  Policy = 'Privacy Policy',
  About = 'About Us',
}

interface Props {
  children: ReactNode
  title: Title
}

const LegalMarkdownLayout: FC<Props> = ({ children, title }) => (
  <Layout>
    <Container size={Size.Narrow} space={Space.None}>
      <div className="mx-3 md:mx-auto">
        <div className="py-24 md:py-44">
          <h1 className="text-center font-bold text-3xl md:text-7xl md:font-extrabold">{title}</h1>
        </div>
        <div className="md:pt-24 pb-24 md:pb-40">
          <section className="prose max-w-[880px] text-base md:text-[18px]">{children}</section>
        </div>
      </div>
    </Container>
  </Layout>
)

export default LegalMarkdownLayout

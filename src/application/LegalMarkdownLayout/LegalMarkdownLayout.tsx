import Container from '@/components/Container'
import Header from '@/application/Header'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: 'Term of Service' | 'Privacy Policy'
}

const LegalMarkdownLayout: FC<Props> = ({ children, title }) => (
  <Container>
    <Header />
    <div>
      <div className="min-h-[50vh] flex items-center">
        <h1 className="mx-auto text-7xl">{title}</h1>
      </div>
      <div className="bg-background-variant flex justify-center py-40">
        <section className="w-2/3 prose">{children}</section>
      </div>
    </div>
  </Container>
)

export default LegalMarkdownLayout

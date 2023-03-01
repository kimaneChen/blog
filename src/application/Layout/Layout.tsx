import { FC, ReactNode } from 'react'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Footer from '@/components/Footer'

interface Props {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
)

export default Layout

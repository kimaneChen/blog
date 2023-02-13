import { FC, ReactNode } from 'react'
import Header from '@/components/Header'
import Container from '@/components/Container'

interface Props {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
)

export default Layout

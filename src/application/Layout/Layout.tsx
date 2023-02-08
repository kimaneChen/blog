import { FC, ReactNode } from 'react'
import Header from '@/application/Header'
import Container from '@/components/Container'

interface Props {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Container className="flex px-6">{children}</Container>
  </>
)

export default Layout

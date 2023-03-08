import { FC, ReactNode } from 'react'
import Header from '@/application/Header'
import Footer from '@/application/Footer'

interface Props {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout

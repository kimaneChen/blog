import { FC, ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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

import { FC, ReactNode } from 'react'
import Container from '@/components/Container'
import Blogs from './components/Blogs'
import Header from './components/Header'
import KeyFeatures from './components/KeyFeatures'

interface Props {
  children: ReactNode
}

const AuthLayout: FC<Props> = ({ children }) => (
  <main>
    <Container>
      <section className="bg-background-variant h-screen w-1/2 px-32 flex items-center">
        <div>
          <Header />
          <KeyFeatures />
          <Blogs />
        </div>
      </section>
      <section className="h-screen w-1/2 px-32 flex items-center ">
        <div>{children}</div>
      </section>
    </Container>
  </main>
)

export default AuthLayout

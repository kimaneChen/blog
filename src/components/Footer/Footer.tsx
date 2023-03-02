import { FC } from 'react'
import Logo from '@/components/Logo'
import { BsTwitter, BsFacebook } from 'react-icons/bs'
import Container from '@/components/Container'
import Signature from '@/components/Signature'
import Link from './components/Link'
import Item from './components/Item'
import ColumnWrapper from './components/ColumnWrapper'

const Footer: FC = () => (
  <footer className="border-t border-outline">
    <Container>
      <div className="h-[300px] flex justify-start gap-x-40 pt-[60px] px-[60px]">
        <div className="flex justify-center items-start">
          <Logo />
        </div>
        <ColumnWrapper>
          <Item>Website</Item>
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
        </ColumnWrapper>
        <ColumnWrapper>
          <Item>Team</Item>
          <Link href="/about-us">About</Link>
        </ColumnWrapper>
        <ColumnWrapper>
          <Item>Legal</Item>
          <Link href="/legal/policy">Privacy of Policy</Link>
          <Link href="/legal/term">Terms of Service</Link>
        </ColumnWrapper>
        <ColumnWrapper>
          <Item>Share Link</Item>
          <Link href="https://twitter.com">
            <BsTwitter className="inline mr-1" />
            Twitter
          </Link>
          <Link href="https://www.facebook.com/">
            <BsFacebook className="inline mr-1" />
            Facebook
          </Link>
        </ColumnWrapper>
      </div>
    </Container>
    <section className="h-[60px] bg-background-variant flex items-center px-6">
      <Signature />
    </section>
  </footer>
)

export default Footer

import { FC } from 'react'
import Logo from '@/components/Logo'
import { BsTwitter, BsFacebook } from 'react-icons/bs'
import Container from '@/components/Container'
import Signature from '@/components/Signature'
import Link from './components/Link'
import Item from './components/Item'
import ColumnWrapper from './components/ColumnWrapper'

const Footer: FC = () => (
  <footer className="h-[360px] relative border-t border-outline flex justify-center">
    <Container>
      <div className="flex w-container justify-start gap-x-40 pt-[60px] px-10">
        <div className="flex flex-col justify-start items-center w-36">
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
    <section className="h-[60px] w-full bg-background-variant absolute bottom-0 flex items-center pl-6">
      <Signature />
    </section>
  </footer>
)

export default Footer

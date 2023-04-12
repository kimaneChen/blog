import { FC } from 'react'
import Logo from '@/application/Logo'
import { BsTwitter, BsFacebook } from 'react-icons/bs'
import Container from '@/components/Container'
import Signature from '@/application/Signature'
import Link from './components/Link'
import Item from './components/Item'
import ColumnWrapper from './components/ColumnWrapper'

const Footer: FC = () => (
  <footer className="border-t border-outline">
    <Container>
      <div className="flex flex-wrap gap-8 md:gap-12 pt-10 pb-14 md:px-16">
        <div className="xl:mr-16">
          <Logo />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-y-8 gap-12 md:gap-24 xl:gap-36">
          <div className="flex gap-12 md:gap-24 xl:gap-36">
            <ColumnWrapper>
              <Item>Website</Item>
              <Link href="/">Home</Link>
              <Link href="/blogs">Blogs</Link>
            </ColumnWrapper>
            <ColumnWrapper>
              <Item>Team</Item>
              <Link href="/about-us">About</Link>
            </ColumnWrapper>
          </div>
          <div className="flex gap-12 md:gap-24 xl:gap-36">
            <ColumnWrapper>
              <Item>Legal</Item>
              <Link href="/legal/policy">Privacy Policy</Link>
              <Link href="/legal/term">Terms of Service</Link>
            </ColumnWrapper>
            <ColumnWrapper>
              <Item>Share Link</Item>
              <Link href="https://twitter.com">
                <div className="flex flex-column justify-center items-center">
                  <BsTwitter className="inline mr-2 w-5 h-5" />
                  Twitter
                </div>
              </Link>
              <Link href="https://www.facebook.com/">
                <div className="flex flex-column justify-center items-center">
                  <BsFacebook className="inline mr-2 w-5 h-5" />
                  Facebook
                </div>
              </Link>
            </ColumnWrapper>
          </div>
        </div>
      </div>
    </Container>
    <section className="h-16 bg-background-variant flex items-center px-6 text-sm md:text-base">
      <Signature />
    </section>
  </footer>
)

export default Footer

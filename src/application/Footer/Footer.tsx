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
      <div className="md:h-[300px] md:flex pt-10 md:pt-16 pb-14 md:px-16">
        <div className="flex md:justify-center items-start md:mr-16">
          <Logo />
        </div>
        <div className="md:flex md:justify-center md:grow md:gap-x-32">
          <div className="flex gap-x-32">
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
          <div className="flex gap-x-16 md:gap-x-32">
            <ColumnWrapper>
              <Item>Legal</Item>
              <Link href="/legal/policy">Privacy of Policy</Link>
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
    <section className="h-16 bg-background-variant flex items-center px-6">
      <Signature />
    </section>
  </footer>
)

export default Footer

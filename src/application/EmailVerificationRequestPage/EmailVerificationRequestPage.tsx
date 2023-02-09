import { NextPage } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'

const EmailVerificationRequestPage: NextPage = () => (
  <Container>
    <div className="h-screen flex items-center justify-center">
      <div>
        <div className="mb-6">
          <h1 className="text-6xl text-center"> Email Verfication</h1>
        </div>

        <div>
          <p className="text-center">
            We just sent you a e-mail login verification link, please ckeck your e-mail.
          </p>
        </div>

        <div className="text-center mt-4">
          <Link
            href="/"
            className="border py-1.5 px-3 border-outline text-on-background h-12 rounded-md"
          >
            CLOSE
          </Link>
        </div>
      </div>
    </div>
  </Container>
)

export default EmailVerificationRequestPage

import { NextPage } from 'next'
import Button, { Variant } from '@/components/Button'
import Input from '@/components/Input'
import { AiOutlineMail, AiOutlineArrowLeft } from 'react-icons/ai'
import Title from './components/Title'
import LegalPolicy from './components/LegalPolicy'
import ExistingAccount from './components/ExistingAccount'

const EmailSignUpPage: NextPage = () => (
  <div className="bg-background">
    <div className="flex mx-auto max-w-container justify-between items-center">
      <section className="bg-background-variant h-screen w-1/2">
        The layout of the left side of the E-mail Sign Up page is the same as the Sign Up page
      </section>
      <section className="flex justify-center items-center h-screen w-1/2">
        <section className="w-1/2">
          <Title />
          <div className="mb-6">
            <Input placeholder="Email address" />
          </div>

          <Button variant={Variant.Dark}>
            <div className="flex item-center gap-1">
              <AiOutlineMail className="text-lg inline" />
              Continue with Email
            </div>
          </Button>

          <Button variant={Variant.Primary}>
            <div className="flex items-center gap-1">
              <AiOutlineArrowLeft className="text-lg" />
              Other Sign Up Options
            </div>
          </Button>

          <LegalPolicy />
          <ExistingAccount />
        </section>
      </section>
    </div>
  </div>
)

export default EmailSignUpPage

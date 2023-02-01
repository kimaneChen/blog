import { FC } from 'react'
import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'

const LegalPolicy: FC = () => (
  <section>
    <div className="text-on-background mt-14">By clicking continue, you agree to our</div>
    <div>
      <Link href="/" className="flex items-center gap-1">
        Terms of Service
        <HiOutlineExternalLink />
      </Link>
    </div>
    <div>
      <Link href="/" className="flex items-center gap-1">
        Privacy of Policy
        <HiOutlineExternalLink />
      </Link>
    </div>
  </section>
)

export default LegalPolicy

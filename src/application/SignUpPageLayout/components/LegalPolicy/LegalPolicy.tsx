import Link from 'next/link'
import { FC } from 'react'
import { FiExternalLink } from 'react-icons/fi'

const LegalPolicy: FC = () => (
  <section className="text-sm md:text-base">
    <div className="text-on-background">By clicking continue, you agree to our</div>
    <div>
      <Link href="/legal/term" className="flex items-center gap-1">
        Terms of Service
        <FiExternalLink />
      </Link>
    </div>
    <div>
      <Link href="/legal/policy" className="flex items-center gap-1">
        Privacy of Policy
        <FiExternalLink />
      </Link>
    </div>
  </section>
)

export default LegalPolicy

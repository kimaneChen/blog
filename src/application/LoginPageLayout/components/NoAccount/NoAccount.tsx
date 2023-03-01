import { FC } from 'react'
import Link from 'next/link'

const NoAccount: FC = () => (
  <section className="pt-4 border-t mt-20 text-center">
    Don&apos;t have an account?{' '}
    <Link href="/sign-up" className="text-link">
      Sign up
    </Link>
  </section>
)

export default NoAccount

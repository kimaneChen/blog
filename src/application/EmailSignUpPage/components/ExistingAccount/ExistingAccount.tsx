import { FC } from 'react'
import Link from 'next/link'

const ExistingAccount: FC = () => (
  <section className="border-t pt-4 mt-10">
    Already have an account?
    <Link href="/login" className="text-primary">
      Log in
    </Link>
  </section>
)

export default ExistingAccount

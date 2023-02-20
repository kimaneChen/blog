import Container from '@/components/Container'
import Header from '@/components/Header'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

const ITEMS = [
  {
    title: 'Blogs',
    href: '/admin/blogs',
  },
  {
    title: 'Users',
    href: '/admin/users',
  },
  {
    title: 'GPT3',
    href: '/admin/gpt3',
  },
]

interface Props {
  children: ReactNode
}

const AdminPageLayout: FC<Props> = ({ children }) => {
  const { pathname } = useRouter()

  return (
    <div>
      <Header />
      <Container>
        <div className="mt-12">
          <h1 className="text-3xl">Admin</h1>
          <div className="mt-6 border border-b-0 rounded-t flex">
            {ITEMS.map((item) => (
              <Link
                key={item.title}
                className={classNames(
                  'text-sm',
                  'px-6',
                  'py-2',
                  'border-r',
                  'hover:text-on-background',
                  pathname === item.href
                    ? ['bg-background-variant', 'text-on-background']
                    : ['text-placeholder']
                )}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="bg-background-variant">
        <Container>
          <div className="py-12">{children}</div>
        </Container>
      </div>
    </div>
  )
}

export default AdminPageLayout

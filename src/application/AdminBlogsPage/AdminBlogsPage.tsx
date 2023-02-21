import AdminPageLayout from '@/application/AdminPageLayout'
import Button, { Variant } from '@/components/Button'
import { useRouter } from 'next/router'
import { FC } from 'react'
import useSWR from 'swr'
import Blogs from './components/Blogs'

const PER_PAGE = 10

const AdminBlogsPage: FC = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 1

  const onPageChange = (to: number): void => {
    router.push(`/admin/blogs?page=${to}`)
  }

  const { data } = useSWR(`/api/admin/blogs?perPage=${PER_PAGE}&page=${page}`)

  const isPreviousPage = page > 1
  const isNextPage = data?.length === PER_PAGE

  return (
    <AdminPageLayout>
      {isPreviousPage && (
        <div className="hidden">
          <Blogs page={page - 1} />
        </div>
      )}
      <Blogs page={page} />
      {isNextPage && (
        <div className="hidden">
          <Blogs page={page + 1} />
        </div>
      )}
      <div className="mt-10 flex justify-center gap-4">
        <Button
          variant={Variant.Default}
          disabled={!isPreviousPage}
          className="w-[100px]"
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </Button>
        <Button
          variant={Variant.Default}
          disabled={!isNextPage}
          className="w-[100px]"
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </AdminPageLayout>
  )
}

export default AdminBlogsPage

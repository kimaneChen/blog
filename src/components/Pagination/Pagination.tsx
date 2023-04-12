import { FC } from 'react'
import Button, { Variant } from '@/components/Button'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'

interface Props {
  page: number
  perPage: number
  total: number
  onPageChange: (to: number) => void
}

const Pagination: FC<Props> = ({ perPage, page, total, onPageChange }) => {
  const isPreviousPage = page > 1
  const isNextPage = total === perPage
  return (
    <div className="mt-2 md:mt-6 flex items-center justify-center gap-2">
      <Button
        variant={Variant.Background}
        disabled={!isPreviousPage}
        onClick={() => onPageChange(page - 1)}
      >
        <IoIosArrowDropleft />
      </Button>
      <div>{page}</div>
      <Button
        variant={Variant.Background}
        disabled={!isNextPage}
        onClick={() => onPageChange(page + 1)}
      >
        <IoIosArrowDropright />
      </Button>
    </div>
  )
}

export default Pagination

import { FC, useState } from 'react'
import Blog from '@/types/Blog'
import useSWR from 'swr'
import LogoModal from '@/application/LogoModal'
import SearchBlog from './components/SearchBlog'
import Search from './components/Search'

interface Props {
  onClose: () => void
}

const PER_PAGE = 9

const SearchModal: FC<Props> = ({ onClose }) => {
  const [search, setSearch] = useState<string>()
  const { data: blogs } = useSWR(`/api/blogs?perPage=${PER_PAGE}&search=${search?.trim()}`)

  return (
    <LogoModal onClose={onClose}>
      <div className="mt-7 px-6 md:mt-0 md:px-0 md:block">
        <Search value={search} onChange={(event) => setSearch(event.target.value)} />
      </div>

      {search && (
        <>
          <hr className="border hidden md:block" />
          <div className="mb-3">
            <h3 className="px-6 pt-3 pb-2 text-on-background text-xs">Recommend for you</h3>
            <div className="md:max-h-[360px] overflow-auto">
              {blogs?.map((blog: Blog) => (
                <SearchBlog blog={blog} onClick={onClose} key={blog.id} search={search} />
              ))}
            </div>
          </div>
        </>
      )}
    </LogoModal>
  )
}

export default SearchModal

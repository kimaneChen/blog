import { FC, useState } from 'react'
import Blog from '@/types/Blog'
import useSWR from 'swr'
import Modal, { Overlay, Size, Position } from '@/components/Modal'
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
    <Modal onClose={onClose} overlay={Overlay.Light} size={Size.Large} position={Position.Top}>
      <Search value={search} onChange={(event) => setSearch(event.target.value)} />
      {search && (
        <>
          <hr className="border" />
          <div className="mb-3">
            <h3 className="px-6 pt-3 pb-2 text-on-background text-xs">Recommend for you</h3>
            <div className="max-h-[360px] overflow-auto">
              {blogs?.map((blog: Blog) => (
                <SearchBlog blog={blog} onClick={onClose} key={blog.id} search={search} />
              ))}
            </div>
          </div>
        </>
      )}
    </Modal>
  )
}

export default SearchModal

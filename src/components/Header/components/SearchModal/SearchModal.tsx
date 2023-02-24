import { FC } from 'react'
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
  const { data: blogs } = useSWR(`/api/blogs?perPage=${PER_PAGE}`)

  return (
    <Modal onClose={onClose} overlay={Overlay.Light} size={Size.Large} position={Position.Top}>
      <Search />
      <hr className="border" />
      <div className="px-6 mb-3">
        <h3 className="py-3 text-on-background text-xs">Recommend for you</h3>
        <div className="max-h-[360px] overflow-auto">
          {blogs &&
            blogs.map((blog: Blog) => <SearchBlog blog={blog} onClick={onClose} key={blog.id} />)}
        </div>
      </div>
    </Modal>
  )
}

export default SearchModal

import Tag from '@/components/Tag'
import { FC, useState } from 'react'
import AddTagModal from './components/AddTagModal'

interface Props {
  tags: string[]
  onTagsChange: (tags: string[]) => void
}

const Tags: FC<Props> = ({ tags, onTagsChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = (): void => setIsModalOpen(!isModalOpen)

  return (
    <>
      <div className="flex gap-3 mb-3 flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        <button type="button" onClick={toggleModal}>
          <Tag>Add a tag</Tag>
        </button>
      </div>
      {isModalOpen && <AddTagModal tags={tags} onTagsChange={onTagsChange} onClose={toggleModal} />}
    </>
  )
}

export default Tags

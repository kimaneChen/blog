import Badge from '@/components/Badge'
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
      <div className="flex gap-3 mb-5 ">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
        <button type="button" onClick={toggleModal}>
          <Badge>Add a tag</Badge>
        </button>
      </div>
      {isModalOpen && <AddTagModal tags={tags} onTagsChange={onTagsChange} onClose={toggleModal} />}
    </>
  )
}

export default Tags

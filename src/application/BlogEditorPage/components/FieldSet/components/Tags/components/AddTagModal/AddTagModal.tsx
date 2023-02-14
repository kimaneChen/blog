import { FC } from 'react'
import Button, { Variant, Size } from '@/components/Button'
import Modal from '@/components/Modal'
import SearchTag from './components/SearchTag'
import AddedTags from './components/AddedTags'

interface Props {
  tags: string[]
  onTagsChange: (tags: string[]) => void
  onClose: () => void
}

const AddTagModal: FC<Props> = ({ tags, onTagsChange, onClose }) => (
  <Modal onClose={onClose}>
    <div className="text-xl mb-4">Add tags for your blog</div>
    <SearchTag tags={tags} onTagsChange={onTagsChange} />
    <div className="mt-4">
      <AddedTags tags={tags} onRemoveTag={onTagsChange} />
    </div>
    <div className="mt-4 flex justify-end">
      <Button variant={Variant.Dark} size={Size.Small} onClick={onClose}>
        Done
      </Button>
    </div>
  </Modal>
)

export default AddTagModal

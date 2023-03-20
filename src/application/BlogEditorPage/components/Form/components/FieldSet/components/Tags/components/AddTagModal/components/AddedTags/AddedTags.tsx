import { FC } from 'react'
import { IoClose } from 'react-icons/io5'
import Tag from '@/components/Tag'

interface Props {
  tags: string[]
  onRemoveTag: (tags: string[]) => void
}

const AddedTags: FC<Props> = ({ tags, onRemoveTag }) => (
  <>
    <div className="text-sm text-on-background">Added Tags</div>
    {tags.length > 0 && (
      <div className="mt-2 flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onRemoveTag(tags.filter((item) => item !== tag))}
          >
            <Tag>
              <div className="flex items-center gap-1">
                {tag}
                <IoClose />
              </div>
            </Tag>
          </button>
        ))}
      </div>
    )}
  </>
)

export default AddedTags

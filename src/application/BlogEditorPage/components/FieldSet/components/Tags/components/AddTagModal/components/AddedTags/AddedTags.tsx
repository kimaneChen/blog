import { FC } from 'react'
import Badge from '@/components/Badge'

interface Props {
  tags: string[]
  onRemoveTag: (tags: string[]) => void
}

const AddedTags: FC<Props> = ({ tags, onRemoveTag }) => (
  <>
    <div className="text-small text-on-background">Added Tags</div>
    {tags.length > 0 && (
      <div className="mt-2 flex gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onRemoveTag(tags.filter((item) => item !== tag))}
          >
            <Badge>{tag}</Badge>
          </button>
        ))}
      </div>
    )}
  </>
)

export default AddedTags

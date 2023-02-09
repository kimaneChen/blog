import Badge from '@/components/Badge'
import { FC } from 'react'

interface Props {
  title: string
  items?: string[]
  onTagClick: (tag: string) => void
}

const Tags: FC<Props> = ({ title, items = [], onTagClick }) => (
  <div className="my-4">
    <div className="text-small text-on-background">{title}</div>
    {items.length > 0 && (
      <div className="mt-2 flex gap-3">
        {items.map((tag) => (
          <button key={tag} type="button" onClick={() => onTagClick(tag)}>
            <Badge>{tag}</Badge>
          </button>
        ))}
      </div>
    )}
  </div>
)

export default Tags

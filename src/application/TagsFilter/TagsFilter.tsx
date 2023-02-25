import Tag from '@/types/Tag'
import { FC } from 'react'
import Option from './components/Option'

interface Props {
  tags: Tag[]
  selectedTags?: Tag[]
  onTagSelect: (tag: Tag) => void
}

const TagsFilter: FC<Props> = ({ tags, selectedTags, onTagSelect }) => (
  <section>
    {tags.map((tag) => (
      <Option
        name={tag.name}
        key={tag.id}
        selected={selectedTags?.includes(tag)}
        onSelect={() => onTagSelect(tag)}
      />
    ))}
  </section>
)

export default TagsFilter

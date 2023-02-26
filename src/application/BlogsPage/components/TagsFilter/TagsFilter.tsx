import Tag from '@/types/Tag'
import { useRouter } from 'next/router'
import { FC } from 'react'
import Option from './components/Option'

interface Props {
  tags: Tag[]
  selectedTags: Tag['name'][]
  onTagSelect: (name: Tag['name']) => void
}

const TagsFilter: FC<Props> = ({ tags, selectedTags, onTagSelect }) => {
  const { query } = useRouter()
  const extraTagNames = (query.tags as string | undefined)
    ?.split(',')
    .filter((name) => !!name)
    .filter((name) => !tags.map((t) => t.name).includes(name))

  return (
    <section>
      {tags.map((tag) => (
        <Option
          name={tag.name}
          key={tag.id}
          selected={selectedTags?.includes(tag.name)}
          onSelect={() => onTagSelect(tag.name)}
        />
      ))}
      {extraTagNames?.map((name) => (
        <Option
          name={name}
          key={name}
          selected={selectedTags?.includes(name)}
          onSelect={() => onTagSelect(name)}
        />
      ))}
    </section>
  )
}

export default TagsFilter

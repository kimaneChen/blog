import { FC } from 'react'
import Tag from './components/Tag'

interface Props {
  tags: { tagName: string; id: string }[]
}

const TagsFilter: FC<Props> = ({ tags }) => (
  <section>
    {tags.map((tag) => (
      <Tag name={tag.tagName} key={tag.id} />
    ))}
  </section>
)

export default TagsFilter

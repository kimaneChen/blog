import { FC } from 'react'
import Option from './components/Option'

interface Props {
  tags: { tagName: string; id: string }[]
}

const TagsFilter: FC<Props> = ({ tags }) => (
  <section className="pt-[30px]">
    {tags.map((tag) => (
      <Option name={tag.tagName} key={tag.id} />
    ))}
  </section>
)

export default TagsFilter

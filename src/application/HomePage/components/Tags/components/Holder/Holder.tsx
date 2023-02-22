import Tag from '@/types/Tag'
import { FC } from 'react'
import Option from './components/Option'

interface Props {
  tags: Tag[]
}

const Holder: FC<Props> = ({ tags }) => (
  <section className="flex gap-8 mb-12">
    {tags.map((tag) => (
      <Option name={tag.name} key={tag.id} />
    ))}
  </section>
)

export default Holder

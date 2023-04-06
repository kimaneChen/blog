import Tag from '@/types/Tag'
import Router from 'next/router'
import { FC } from 'react'
import Option from './components/Option'

interface Props {
  tags: Tag[]
}

const Holder: FC<Props> = ({ tags }) => (
  <section className="flex gap-8 mb-6 md:mb-12">
    {tags.map((tag) => (
      <Option name={tag.name} key={tag.id} onClick={() => Router.push(`/blogs?tags=${tag.name}`)} />
    ))}
  </section>
)

export default Holder

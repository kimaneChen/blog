import Tag from '@/types/Tag'
import useSWR from 'swr'
import CreateANewBlogButton from '@/components/CreateANewBlogButton'
import { FC } from 'react'
import Holder from './components/Holder'
import Gradient from './components/Gradient'

const PER_PAGE = 30
const Tags: FC = () => {
  const { data: tags } = useSWR<Tag[]>(`/api/tags?perPage=${PER_PAGE}`)

  if (!tags) {
    return null
  }

  const tagsPerSection = 3 + Math.floor(Math.random() * 3)

  const sections = new Array(6)
    .fill(null)
    .map((_, i) => tags.slice(i * tagsPerSection, (i + 1) * tagsPerSection))

  return (
    <div className="flex flex-col items-center relative">
      <div>
        <h2 className="mb-12 font-bold ">Explore Our Tags</h2>
      </div>
      {sections.map((section) => (
        <div key={section.map((tag) => tag.id).join()}>
          <Holder tags={section} />
        </div>
      ))}
      <CreateANewBlogButton className="mt-[52px]">
        start creating a New Blog Now
      </CreateANewBlogButton>
      <Gradient />
    </div>
  )
}

export default Tags

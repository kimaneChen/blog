import CreateANewBlogButton from '@/components/CreateANewBlogButton'
import Tag from '@/types/Tag'
import { chunk } from 'lodash'
import { FC } from 'react'
import useSWR from 'swr'
import Gradient from './components/Gradient'
import Holder from './components/Holder'

export const TAGS_PER_PAGE = 30
const Tags: FC = () => {
  const { data: tags } = useSWR<Tag[]>(`/api/tags?perPage=${TAGS_PER_PAGE}`)

  if (!tags) {
    return null
  }

  const sections = chunk(tags, 5)

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
        Start Creating a New Blog Now
      </CreateANewBlogButton>
      <Gradient />
    </div>
  )
}

export default Tags

import CreateANewBlogButton, { Size } from '@/application/CreateANewBlogButton'
import Tag from '@/types/Tag'
import { chunk } from 'lodash'
import { FC } from 'react'
import useSWR from 'swr'
import useIsScreen, { Screen } from '@/hooks/useIsScreen'
import Gradient from './components/Gradient'
import Holder from './components/Holder'

export enum TagsPerPage {
  Large = 30,
  Small = 12,
}

const Tags: FC = () => {
  const isSmallScreen = useIsScreen(Screen.Small)
  const { data: tags } = useSWR<Tag[]>(
    `/api/tags?perPage=${isSmallScreen ? TagsPerPage.Small : TagsPerPage.Large}`
  )

  if (!tags) {
    return null
  }

  const sections = chunk(tags, isSmallScreen ? 2 : 5)

  return (
    <div className="flex flex-col items-center relative">
      <div>
        <h2 className="mb-6 md:mb-12 font-bold text-lg md:text-2xl">Explore Our Tags</h2>
      </div>
      {sections.map((section) => (
        <div key={section.map((tag) => tag.id).join()}>
          <Holder tags={section} />
        </div>
      ))}
      <div className="mt-8 md:mt-14">
        <CreateANewBlogButton size={!isSmallScreen ? Size.Large : Size.Normal}>
          <div className="px-3">Start Creating a New Blog Now</div>
        </CreateANewBlogButton>
      </div>
      <Gradient />
    </div>
  )
}

export default Tags

import { useState, useMemo, FC, ChangeEvent } from 'react'
import useSWR from 'swr'
import { FiSearch } from 'react-icons/fi'
import { SuggestedTags } from '@/schemas/SuggestedTags'
import Tag from '@/types/Tag'
import NakedInput from '@/components/NakedInput'

interface Props {
  tags: string[]
  onTagsChange: (tags: string[]) => void
}

const SearchTag: FC<Props> = ({ tags, onTagsChange }) => {
  const [value, setValue] = useState<SuggestedTags['search']>('')

  const isValid = value.length > 2

  const { data } = useSWR<Tag[]>(isValid && `/api/tags/suggested?search=${value}`)

  const suggestedTags = useMemo<string[]>(() => {
    let result: string[] = []

    if (data?.length) {
      result = data.map((tag) => tag.name)
    } else if (isValid) {
      result = [value]
    }

    return result.filter((tag) => !tags.includes(tag))
  }, [data, tags, value, isValid])

  return (
    <div className="border rounded">
      <NakedInput
        placeholder="Search tags here"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        prefix={<FiSearch />}
      />
      {suggestedTags.length > 0 && (
        <div className="leading-10 bg-[#FAFAFA]">
          <div className="mt-2 flex gap-3">
            {suggestedTags.map((tag) => (
              <button
                className="px-4 block w-full text-left"
                key={tag}
                type="button"
                onClick={() => onTagsChange([...tags, tag])}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchTag

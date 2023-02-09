import Button, { Variant } from '@/components/Button'
import Input from '@/components/Input'
import { SuggestedTags } from '@/schemas/SuggestedTags'
import Tag from '@/types/Tag'
import { FC, useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import useSWR from 'swr'
import Tags from './components/Tags'

interface Props {
  tags: string[]
  onTagsChange: (tags: string[]) => void
  onClose: () => void
}

const AddTagModal: FC<Props> = ({ tags, onTagsChange, onClose }) => {
  const [value, setValue] = useState<SuggestedTags['search']>('')

  const isValid = value.length > 2

  const { data, isLoading } = useSWR<Tag[]>(isValid && `/api/tags/suggested?search=${value}`)

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
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#000000]/50 flex justify-center items-center z-50">
      <div className="relative bg-background w-[600px] py-6 px-12 rounded">
        <div className="text-2xl mb-6">Add a tag</div>
        <Input
          placeholder="Search tags"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          suffix={<FiSearch />}
        />
        <Tags
          title={isLoading ? 'Loading...' : 'Suggested Tags'}
          items={suggestedTags}
          onTagClick={(tag) => onTagsChange([...tags, tag])}
        />
        <hr />
        <Tags
          title="Added Tags"
          items={tags}
          onTagClick={(tag) => onTagsChange(tags.filter((item) => item !== tag))}
        />
        <button type="button" className="absolute top-4 right-4" onClick={onClose}>
          X
        </button>
        <hr />
        <div className="mt-4 flex justify-end gap-4">
          <Button variant={Variant.Primary} onClick={onClose}>
            Done
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddTagModal

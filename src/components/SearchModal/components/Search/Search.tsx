import Input, { Size } from '@/components/Input'
import { ChangeEventHandler, FC, Ref } from 'react'

interface Props {
  value: string | undefined
  onChange: ChangeEventHandler<HTMLInputElement>
}

const handleInputFocus: Ref<HTMLInputElement> = (element) => element?.focus()

const Search: FC<Props> = ({ value, onChange }) => (
  <Input
    ref={handleInputFocus}
    placeholder="What do you need?"
    size={Size.Large}
    value={value}
    onChange={onChange}
    className="focus:outline-none border-none text-lg font-medium placeholder:text-placeholder"
  />
)

export default Search

import Input, { Size } from '@/components/Input'
import { FC, Ref } from 'react'

const handleInputFocus: Ref<HTMLInputElement> = (element) => element?.focus()

const Search: FC = () => (
  <Input
    ref={handleInputFocus}
    placeholder="What do you need?"
    size={Size.Large}
    className="focus:outline-none border-none text-[18px] font-medium"
  />
)

export default Search

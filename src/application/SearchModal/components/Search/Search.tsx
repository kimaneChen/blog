import Input, { Size } from '@/components/Input'
import { ChangeEventHandler, FC, Ref } from 'react'
import classNames from 'classnames'
import useIsScreen, { Screen } from '@/hooks/useIsScreen/useIsScreen'

interface Props {
  value: string | undefined
  onChange: ChangeEventHandler<HTMLInputElement>
}

const handleInputFocus: Ref<HTMLInputElement> = (element) => element?.focus()

const Search: FC<Props> = ({ value, onChange }) => {
  const isSmallScreen = useIsScreen(Screen.Small)
  return (
    <Input
      ref={handleInputFocus}
      placeholder="What do you need?"
      size={isSmallScreen ? Size.Medium : Size.Large}
      value={value}
      onChange={onChange}
      className={classNames(
        'focus:outline-none',
        'border',
        'focus:border-on-background',
        'md:border-none',
        'font-medium',
        'placeholder:text-placeholder',
        !isSmallScreen && 'text-lg'
      )}
    />
  )
}

export default Search

import { FC, useId } from 'react'

interface Props {
  name: string
  selected?: boolean
  onSelect: () => void
}

const Option: FC<Props> = ({ name, selected = false, onSelect }) => {
  const id = useId()

  return (
    <div className="bg-background-variant rounded py-2 px-3 my-3 flex items-center">
      <input
        type="checkbox"
        id={id}
        className="w-5 h-5 rounded accent-background-variant"
        checked={selected}
        onChange={onSelect}
      />
      <label htmlFor={id} className="pl-2 text-on-background grow">
        {name}
      </label>
    </div>
  )
}

export default Option

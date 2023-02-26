import { FC } from 'react'

interface Props {
  name: string
  onClick: () => void
}

const Option: FC<Props> = ({ name, onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className="border rounded-xl py-2 px-4 text-dark bg-background"
  >
    {name}
  </button>
)

export default Option

import { FC } from 'react'

interface Props {
  name: string
}

const Option: FC<Props> = ({ name }) => (
  <button type="button" className="border rounded-xl py-2 px-4 text-dark bg-background">
    {name}
  </button>
)

export default Option

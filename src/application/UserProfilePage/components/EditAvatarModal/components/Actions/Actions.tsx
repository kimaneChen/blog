import { FC } from 'react'
import Upload from './components/Upload'
import Remove from './components/Remove'

const Actions: FC = () => (
  <div className="flex justify-between text-sm text-on-background">
    <Upload />
    <Remove />
  </div>
)

export default Actions

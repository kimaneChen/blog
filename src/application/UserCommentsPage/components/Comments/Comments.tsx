import { FC } from 'react'
import Item from './components/Item'

const Comments: FC = () => (
  <div className="mb-6">
    <div className="text-sm text-on-background mb-3">Feb 27th 2023</div>
    <Item />
    <Item />
    <Item />
  </div>
)

export default Comments

import { FC } from 'react'
import Article from './components/Article'
import User from './components/User'

const Content: FC = () => (
  <div className="flex flex-col lg:flex-row">
    <div className="mx-auto">
      <Article />
    </div>
    <User />
  </div>
)

export default Content

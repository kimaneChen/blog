import { FC } from 'react'
import Article from './components/Article'
import User from './components/User'

const Content: FC = () => (
  <div className="flex flex-col md:flex-row">
    <Article />
    <User />
  </div>
)

export default Content

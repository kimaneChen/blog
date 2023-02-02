import { FC } from 'react'
import BlogOverview from './components/BlogOverview'

const Blogs: FC = () => (
  <div className="py-3">
    <BlogOverview date="22 Jan 2023" title="Lorem ipsum dolor sit..." badge="badge">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptate nulla assumenda
      iure vero nam in id aperiam rerum ab.
    </BlogOverview>
    <BlogOverview date="22 Jan 2023" title="Lorem ipsum dolor sit..." badge="Engineering">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptate nulla assumenda
      iure vero nam in id aperiam rerum ab.
    </BlogOverview>
  </div>
)

export default Blogs

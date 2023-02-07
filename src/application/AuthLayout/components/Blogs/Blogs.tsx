import { FC } from 'react'
import BlogOverview from '@/application/BlogOverview'

const AVATAR1 = { alt: 'avatar1' }
const AVATAR2 = { alt: 'avatar2' }

const Blogs: FC = () => (
  <div className="py-3">
    <BlogOverview date="22 Jan 2023" title="Lorem ipsum dolor sit..." avatar={AVATAR1}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptate nulla assumenda
      iure vero nam in id aperiam rerum ab.
    </BlogOverview>
    <BlogOverview date="22 Jan 2023" title="Lorem ipsum dolor sit..." avatar={AVATAR2}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptate nulla assumenda
      iure vero nam in id aperiam rerum ab.
    </BlogOverview>
  </div>
)

export default Blogs

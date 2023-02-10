import { FC } from 'react'
import Feature from './components/Feature'

const KeyFeatures: FC = () => (
  <div className="py-3">
    <Feature
      title="A in-text comment system"
      content="Easy share your thoughts and feedback directly on specific parts of a blog post."
    />
    <Feature
      title="Content Management System (CMS)"
      content="An easy-to-use platform to manage and publish blog posts."
    />
    <Feature
      title="Categories and tags"
      content="Filter and organize content use your own label and tags."
    />
  </div>
)

export default KeyFeatures

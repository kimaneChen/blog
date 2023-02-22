import Button, { Variant, Size } from '@/components/Button'
import { FC } from 'react'
import Router from 'next/router'

const CreateANewBlogButton: FC = () => (
  <Button variant={Variant.Dark} onClick={() => Router.push('/new-blog')} size={Size.Medium}>
    Create a new Blog
  </Button>
)

export default CreateANewBlogButton

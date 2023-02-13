import Button, { Variant } from '@/components/Button'
import { FC } from 'react'
import Router from 'next/router'

const CreateANewBlogButton: FC = () => (
  <Button variant={Variant.Dark} onClick={() => Router.push('/new-blog')}>
    Create a new Blog
  </Button>
)

export default CreateANewBlogButton

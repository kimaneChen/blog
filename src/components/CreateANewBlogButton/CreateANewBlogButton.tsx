import Button, { Variant, Size, Props as ButtonProps } from '@/components/Button'
import { FC, ReactNode } from 'react'
import Router from 'next/router'

interface Props extends ButtonProps {
  children: ReactNode
}
const CreateANewBlogButton: FC<Props> = ({ children, className }) => (
  <Button
    variant={Variant.Dark}
    size={Size.Medium}
    onClick={() => Router.push('/new-blog')}
    className={className}
  >
    {children}
  </Button>
)

export default CreateANewBlogButton

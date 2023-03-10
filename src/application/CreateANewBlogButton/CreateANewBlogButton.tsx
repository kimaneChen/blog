import Button, { Props as ButtonProps, Size, Variant } from '@/components/Button'
import Router from 'next/router'
import { FC, ReactNode } from 'react'

export { Size } from '@/components/Button'

interface Props extends ButtonProps {
  children: ReactNode
  size?: Size
}
const CreateANewBlogButton: FC<Props> = ({ children, size = Size.Normal, className }) => (
  <Button
    variant={Variant.Dark}
    size={size}
    onClick={() => Router.push('/new-blog')}
    className={className}
  >
    {children}
  </Button>
)

export default CreateANewBlogButton

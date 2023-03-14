import { FC, ReactNode } from 'react'
import Button, { Variant } from '@/components/Button'

interface Props {
  hasMore: boolean
  children: ReactNode
  onLoadMore: () => void
}

const LoadMoreButton: FC<Props> = ({ hasMore, children, onLoadMore }) => (
  <div className="text-center">
    {hasMore ? (
      <Button variant={Variant.Outline} onClick={onLoadMore}>
        {children}
      </Button>
    ) : (
      <div className="text-on-background text-sm">You have reached the end.</div>
    )}
  </div>
)

export default LoadMoreButton

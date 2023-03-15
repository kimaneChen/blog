import Button, { Size, Variant } from '@/components/Button'
import { FC, ReactNode } from 'react'

interface Props {
  onToggle: () => void
  children: ReactNode
}

const ToggleRepliesButton: FC<Props> = ({ onToggle, children }) => (
  <Button
    variant={Variant.BackgroundVariant}
    size={Size.XSmall}
    className="absolute right-0 bottom-6 flex items-center text-sm"
    onClick={onToggle}
  >
    {children}
  </Button>
)

export default ToggleRepliesButton

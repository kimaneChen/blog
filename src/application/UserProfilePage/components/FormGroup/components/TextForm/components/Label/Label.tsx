import { FC, ReactNode } from 'react'
import classNames from 'classnames'

interface Props {
  text: string
  visible?: boolean
  icon?: ReactNode
}

const Label: FC<Props> = ({ text, visible = undefined, icon = undefined }) => (
  <div className={classNames('flex gap-2', { 'sr-only': !visible })}>
    {icon}
    <span className="truncate w-[8ch]">{text}</span>
  </div>
)

export default Label

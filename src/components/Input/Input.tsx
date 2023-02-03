import classNames from 'classnames'
import { FC } from 'react'

interface Props {
  placeholder?: string
  suffix?: JSX.Element
}

const Input: FC<Props> = ({ placeholder, suffix }) => (
  <div className={classNames({ relative: suffix })}>
    <input type="text" placeholder={placeholder} className="w-full h-12 px-4 border rounded-md" />
    {suffix && <div className="absolute top-0 bottom-0 flex items-center right-3">{suffix}</div>}
  </div>
)

export default Input

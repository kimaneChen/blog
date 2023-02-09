import classNames from 'classnames'
import { FC, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  suffix?: JSX.Element
}

const Input: FC<Props> = ({ suffix, ...props }) => (
  <div className={classNames({ relative: suffix })}>
    <input
      type="text"
      className="w-full h-12 px-4 border rounded-md"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
    {suffix && <div className="absolute top-0 bottom-0 flex items-center right-3">{suffix}</div>}
  </div>
)

export default Input

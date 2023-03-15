import DateFormat from '@/types/DateFormat'
import { parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { FC } from 'react'

interface Props {
  children: string
  format?: DateFormat
  className?: string
}

const Date: FC<Props> = ({ children, format = DateFormat.Default, className = undefined }) => (
  <time dateTime={children} className={className}>
    {formatInTimeZone(parseISO(children), 'GMT', format)}
  </time>
)

export default Date

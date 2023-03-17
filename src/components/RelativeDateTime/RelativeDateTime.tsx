import DateFormat from '@/types/DateFormat'
import { differenceInDays, formatDistanceToNowStrict } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { FC } from 'react'

interface Props {
  children: string
  className?: string
  format?: DateFormat
}

const RelativeDateTime: FC<Props> = ({
  children,
  className = undefined,
  format = DateFormat.Default,
}) => {
  if (differenceInDays(new Date(), new Date(children)) <= 3) {
    return (
      <time dateTime={children} className={className}>
        {formatDistanceToNowStrict(new Date(children), { addSuffix: true })}
      </time>
    )
  }

  return (
    <time dateTime={children} className={className}>
      {formatInTimeZone(children, 'GMT', format)}
    </time>
  )
}

export default RelativeDateTime

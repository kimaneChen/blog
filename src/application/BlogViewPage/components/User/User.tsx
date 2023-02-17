import { useRouter } from 'next/router'
import { FC } from 'react'
import useSWR from 'swr'
import Avatar from '@/components/Avatar'

const User: FC = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useSWR(`/api/blog/${id}`)
  if (!data) return null
  return (
    <div className="border-l pl-9 w-[260px]">
      <div className="text-on-background text-sm">Posted by</div>
      <div className="mt-3.5 flex gap-3">
        <Avatar width={32} height={32} alt={data.user.name} src={data.user.image} />
        <div className="text-xs">
          {data.user.name}
          <div className="text-on-background">@Developer</div>
        </div>
      </div>
    </div>
  )
}

export default User

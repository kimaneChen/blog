import { NextPage } from 'next'
import UserLayout from '@/application/UserLayout'
import Comments from './components/Comments'
import MockData from './MockData'

const UserCommentsPage: NextPage = () => (
  <UserLayout className="mt-10">
    {MockData.map((item) => (
      <Comments key={item.id} date={item.date} comments={item.comments} />
    ))}
  </UserLayout>
)

export default UserCommentsPage

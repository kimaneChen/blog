import UserLayout from '@/application/UserLayout'
import { NextPage } from 'next'
import Comments from './components/Comments'

const UserCommentsPage: NextPage = () => (
  <UserLayout className="mt-10">
    <Comments />
    <Comments />
    <Comments />
  </UserLayout>
)

export default UserCommentsPage

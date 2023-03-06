import { NextPage } from 'next'
import UserLayout from '@/application/UserLayout'
import Button, { Size, Variant } from '@/components/Button'
import BlogComments from './components/BlogComments'
import BLOGSWITHCOMMENTS from './MockData'

const UserNotificationPage: NextPage = () => (
  <UserLayout className="px-7 pt-6 mt-10 border rounded-xl">
    <Button variant={Variant.Background} size={Size.Small} className="border border-dark mr-5">
      Blogs
    </Button>
    <Button variant={Variant.Outline} size={Size.Small} className="bg-background-variant">
      Comments
    </Button>

    {BLOGSWITHCOMMENTS.map(({ id, title, comments }) => (
      <BlogComments key={id} title={title} comments={comments} />
    ))}
  </UserLayout>
)

export default UserNotificationPage

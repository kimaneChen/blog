import { NextPage } from 'next'
import UserLayout from '@/application/UserLayout'
import EditAvatarModal from './components/EditAvatarModal'

const UserProfilesPage: NextPage = () => (
  <UserLayout>
    <EditAvatarModal />
  </UserLayout>
)

export default UserProfilesPage

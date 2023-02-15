import AdminPageLayout from '@/application/AdminPageLayout'
import { FC } from 'react'
import Blogs from './components/Blogs'
import Users from './components/Users'

const AdminGPT3Page: FC = () => (
  <AdminPageLayout>
    <div>
      <Users />
    </div>
    <div className="mt-12">
      <Blogs />
    </div>
  </AdminPageLayout>
)

export default AdminGPT3Page

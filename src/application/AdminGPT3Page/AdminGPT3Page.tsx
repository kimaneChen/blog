import Layout from '@/application/Layout'
import { FC } from 'react'
import Blogs from './components/Blogs'
import Users from './components/Users'

const AdminBlogsPage: FC = () => (
  <Layout>
    <div className="mt-12">
      <Users />
    </div>
    <div className="mt-12">
      <Blogs />
    </div>
  </Layout>
)

export default AdminBlogsPage

import { v4 as uuidv4 } from 'uuid'

const navItems = [
  {
    id: uuidv4(),
    href: '/user/notifications',
    label: 'Notifications',
  },
  {
    id: uuidv4(),
    href: '/user/blogs',
    label: 'Blogs',
  },
  {
    id: uuidv4(),
    href: '/user/comments',
    label: 'Comments',
  },
  {
    id: uuidv4(),
    href: '/user/settings',
    label: 'Settings',
  },
]

export default navItems

import { v4 as uuidv4 } from 'uuid'
import { BiNotification } from 'react-icons/bi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { VscCommentDiscussion } from 'react-icons/vsc'
import { FiSettings } from 'react-icons/fi'

const navItems = [
  {
    id: uuidv4(),
    href: '/user/notifications',
    label: 'Notifications',
    icon: <BiNotification />,
  },
  {
    id: uuidv4(),
    href: '/user/blogs',
    label: 'Blogs',
    icon: <HiOutlineDocumentText />,
  },
  {
    id: uuidv4(),
    href: '/user/comments',
    label: 'Comments',
    icon: <VscCommentDiscussion />,
  },
  {
    id: uuidv4(),
    href: '/user/profile',
    label: 'Profile',
    icon: <FiSettings />,
  },
]

export default navItems

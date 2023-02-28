import { FC } from 'react'
import { User } from '@/schemas/User'
import Item from './components/Item'

const MOCKUSER: User = {
  name: 'Helena Jones',
  email: 'Helena.Jones@mel.fish',
  image: 'https://avatars.dicebear.com/api/avataaars/Helena.Jones@mel.fish.svg',
}
const MOCKUSER2: User = {
  name: 'Michael Smith',
  email: 'Michael.Smith@mel.fish',
  image: 'https://avatars.dicebear.com/api/avataaars/Michael.Smith@mel.fish.svg',
}

const Comments: FC = () => (
  <div className="pr-24">
    <Item relativeTime="4h" commentUser={MOCKUSER}>
      Lorem ipsum dolor sit amet.
    </Item>
    <Item relativeTime="4h" isMyComment amountReplies={5} commentUser={MOCKUSER2}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta totam fugit dolores pariatur
      quas exercitationem commodi consequuntur nisi suscipit odit quam voluptatibus animi,
      cupiditate, culpa perspiciatis quidem? Aperiam, tempore natus!
    </Item>
    <Item relativeTime="4h" isMyComment amountReplies={3} commentUser={MOCKUSER}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta totam fugit dolores pariatur
      quas exercitationem commodi
    </Item>
  </div>
)

export default Comments

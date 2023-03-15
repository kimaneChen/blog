import { FC } from 'react'
import { BsFillCaretRightFill } from 'react-icons/bs'
import LoadMoreButton from '@/application/LoadMoreButton'
import Remark from '../Remark'

const Replies: FC = () => (
  <div className="pl-8">
    <Remark
      user={{
        id: 'User-4',
        name: 'Katherine Smith',
        image: 'https://avatars.dicebear.com/api/avataaars/Katherine.Smith@mel.fish.svg',
        email: '123@gmail.com',
      }}
      content="Anim velit non culpa quis ad nisi qui nulla officia ex duis Lorem."
      createdAt="2023-03-07T03:47:44.289Z"
      header={
        <>
          Katherine Smith <BsFillCaretRightFill /> Harry Potter
        </>
      }
    />
    <Remark
      user={{
        id: 'User-3',
        name: 'Harry Potter',
        image: 'https://avatars.dicebear.com/api/avataaars/Harry.Potter@mel.fish.svg',
        email: '123@gmail.com',
      }}
      content="Eu minim anim mollit Lorem culpa officia magna irure."
      createdAt="2023-03-07T03:45:44.289Z"
      header={<>Harry Potter</>}
    />
    <LoadMoreButton hasMore onLoadMore={() => {}}>
      <span className="text-sm">MORE REPLIES</span>
    </LoadMoreButton>
  </div>
)

export default Replies

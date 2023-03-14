import { FC, useState } from 'react'
import Button, { Variant, Size } from '@/components/Button'

const Actions: FC = () => {
  const [isPublish, setIsPublish] = useState<boolean>(true)
  return (
    <div className="flex w-[100px] flex-wrap gap-4 text-sm">
      <Button className="grow border" variant={Variant.Dark} size={Size.Small}>
        Edit
      </Button>

      {isPublish ? (
        <Button
          className="grow border"
          variant={Variant.Background}
          size={Size.Small}
          onClick={() => setIsPublish(false)}
        >
          Unpublish
        </Button>
      ) : (
        <>
          <Button className="grow border" variant={Variant.Background} size={Size.Small}>
            Delete
          </Button>

          <Button
            className="grow border"
            variant={Variant.Background}
            size={Size.Small}
            onClick={() => setIsPublish(true)}
          >
            Publish
          </Button>
        </>
      )}
    </div>
  )
}

export default Actions

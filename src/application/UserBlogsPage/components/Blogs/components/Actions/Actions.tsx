import React, { FC } from 'react'
import Button, { Size, Variant } from '@/components/Button'
import { useRouter } from 'next/router'

interface Props {
  id: string
  unpublishedAt: string | null
  onUnpiblish: () => void
  onPublish: () => void
  onDelete: () => void
}

const Actions: FC<Props> = ({ id, unpublishedAt, onUnpiblish, onPublish, onDelete }) => {
  const router = useRouter()

  return (
    <div className="flex gap-4 md:flex-col min-w-[100px] text-sm">
      {unpublishedAt ? (
        <>
          <Button
            className="w-[90px]"
            variant={Variant.Dark}
            size={Size.Small}
            onClick={() => router.push(`/blogs/${id}/edit`)}
          >
            Edit
          </Button>
          <Button
            className="w-[90px]"
            variant={Variant.Outline}
            size={Size.Small}
            onClick={() => onDelete()}
          >
            Delete
          </Button>
          <Button
            className="w-[90px]"
            variant={Variant.Outline}
            size={Size.Small}
            onClick={() => onPublish()}
          >
            Publish
          </Button>
        </>
      ) : (
        <>
          <Button
            className="w-[140px] md:w-[90px]"
            variant={Variant.Dark}
            size={Size.Small}
            onClick={() => router.push(`/blogs/${id}/edit`)}
          >
            Edit
          </Button>
          <Button
            className="w-[140px] md:w-[90px]"
            variant={Variant.Outline}
            size={Size.Small}
            onClick={() => onUnpiblish()}
          >
            Unpublish
          </Button>
        </>
      )}
    </div>
  )
}

export default Actions

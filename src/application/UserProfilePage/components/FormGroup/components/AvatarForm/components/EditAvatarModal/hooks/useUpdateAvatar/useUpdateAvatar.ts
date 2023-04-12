import { ChangeEvent, useState } from 'react'
import supabase from '@/lib/supabase'
import updateAvatar from '@/apis/updateAvatar'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useNotification } from '@/context/NotificationContext'
import createBucket, { Bucket } from '@/utils/createBucket'
import { v4 as uuidv4 } from 'uuid'

interface Result {
  handleUpload: (event: ChangeEvent<HTMLInputElement>) => Promise<void>
  handleDelete: () => Promise<void>
}

createBucket(Bucket.Avatars, { public: true })

const useUpdateAvatar = (): Result => {
  const { data: session, update } = useSession()

  const [initialImage] = useState<string | null>(session?.user?.image ?? null)

  const { setMessage } = useNotification()

  const handleUpdate = async (image: string | null): Promise<void> => {
    await updateAvatar(image)
    update((prevSession: Session) => ({
      ...prevSession,
      user: {
        image,
      },
    }))
  }

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    try {
      if (!session?.user) {
        return
      }

      if (!event.target.files?.[0]) {
        setMessage('Please select an image to upload')
        return
      }

      const file = event.target.files[0]
      const fileExtension = file.name.split('.').pop()
      const filePath = `${session.user.email}/${uuidv4()}.${fileExtension}`

      const { data, error } = await supabase.storage
        .from(Bucket.Avatars)
        .list(`${session.user.email}`)

      if (error) {
        throw error
      }

      if (data.length > 0) {
        const { error: removeError } = await supabase.storage
          .from(Bucket.Avatars)
          .remove([`${session.user.email}/${data[0].name}`])

        if (removeError) {
          throw removeError
        }
      }

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(Bucket.Avatars)
        .upload(filePath, file, { upsert: true })

      if (uploadError) {
        throw uploadError
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from(Bucket.Avatars).getPublicUrl(uploadData.path)

      handleUpdate(publicUrl)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  const handleDelete = async (): Promise<void> => {
    try {
      if (!session?.user) {
        return
      }

      const { data, error } = await supabase.storage
        .from(Bucket.Avatars)
        .list(`${session.user.email}`)

      if (error) {
        throw error
      }

      if (data.length > 0) {
        const { error: removeError } = await supabase.storage
          .from(Bucket.Avatars)
          .remove([`${session.user.email}/${data[0].name}`])

        if (removeError) {
          throw removeError
        }

        handleUpdate(initialImage)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  return { handleUpload, handleDelete }
}

export default useUpdateAvatar

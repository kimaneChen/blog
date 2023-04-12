import supabase from '@/lib/supabase'

export enum Bucket {
  Avatars = 'avatars',
}

interface Options {
  public: boolean
}

const createBucket = async (
  bucketName: string,
  options: Options = { public: false }
): Promise<void> => {
  try {
    const { data, error } = await supabase.storage.listBuckets()

    if (error) {
      throw error
    }

    if (!data.some((bucket) => bucket.name === bucketName)) {
      const { error: createBucketError } = await supabase.storage.createBucket(bucketName, options)

      if (createBucketError) {
        throw createBucketError
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

export default createBucket

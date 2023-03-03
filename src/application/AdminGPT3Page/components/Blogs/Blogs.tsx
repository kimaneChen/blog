import Button, { Variant } from '@/components/Button'
import Blog from '@/types/Blog'
import { FC, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useAskGPT3 from '../../hooks/useAskGPT3'
import AddBlog from './components/AddBlog'

type RawGPT3Blog = {
  title: string
  description: string
  tags: string[]
}

type GPT3Blog = Pick<Blog, 'id' | 'title'> & {
  tags: NonNullable<Blog['tags']>
  description: NonNullable<Blog['description']>
}

const Blogs: FC = () => {
  const { loading, data, askGPT3 } = useAskGPT3(`
    Could you give me 4 blogs in the following structure?
    [
      {
        "title": string,
        "description": string,
        "tags": string[]
      }
    ]
  `)

  const blogs = useMemo<GPT3Blog[] | null>(() => {
    const result = data?.match(/(\[.*\])/gs)?.[0]

    if (!result) return null

    try {
      return JSON.parse(result).map((item: RawGPT3Blog) => ({
        ...item,
        id: uuidv4(),
        tags: item.tags.map((name) => ({
          id: uuidv4(),
          name,
        })),
      }))
    } catch (error) {
      return null
    }
  }, [data])

  return (
    <>
      <div>
        <Button disabled={loading} variant={Variant.Primary} onClick={askGPT3}>
          {loading ? 'Loading...' : 'Hi GPT3, Give me some blogs!'}
        </Button>
      </div>
      {data && (
        <textarea
          className="mt-12 w-full resize-none rounded-md p-2"
          rows={10}
          readOnly
          value={data}
        />
      )}
      {blogs && (
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-4">
            {blogs.map((blog: GPT3Blog) => (
              <AddBlog
                key={blog.id}
                title={blog.title}
                description={blog.description}
                tags={blog.tags}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Blogs

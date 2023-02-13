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

type GPT3Blog = Pick<Blog, 'id' | 'title' | 'description'> & {
  tags: NonNullable<Blog['tags']>
}

const Blogs: FC = () => {
  const { loading, data, askGPT3 } = useAskGPT3(`
    If you are a front-end blog writer, 
    can you update the following data to a real front-end blog? 
    Your response should in JSON format and JSON only. 
    [
      {
        "title": "Example blog",
        "description": "Example description",
        "tags": ["Tag1", "Tag2", "Tag3"]
      },
      {
        "title": Example blog",
        "description": "Example ",
        "tags": ["Tag1", "Tag2", "Tag3"]
      },
      {
        "title": Example blog",
        "description": "Example ",
        "tags": ["Tag1", "Tag2", "Tag3"]
      },
      {
        "title": Example blog",
        "description": "Example ",
        "tags": ["Tag1", "Tag2", "Tag3"]
      },
    ]
  `)

  const blogs = useMemo<GPT3Blog[] | null>(() => {
    if (!data) return null

    try {
      return JSON.parse(data).map((item: RawGPT3Blog) => ({
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

import { GetStaticProps } from 'next'
import { BLOGS_PER_PAGE } from './components/ExploreBlogs/ExploreBlogs'
import { TAGS_PER_PAGE } from './components/Tags'

const getStaticProps: GetStaticProps = async () => {
  const getTags = (await import('@/services/getTags')).default
  const getBlogs = (await import('@/services/getBlogs')).default

  const tags = await getTags({
    page: 1,
    perPage: TAGS_PER_PAGE,
  })

  const blogs = await getBlogs({
    page: 1,
    perPage: BLOGS_PER_PAGE,
  })

  return {
    props: {
      fallback: {
        [`/api/tags?perPage=${TAGS_PER_PAGE}`]: tags,
        [`/api/blogs?perPage=${BLOGS_PER_PAGE}`]: blogs,
      },
    },
  }
}

export default getStaticProps

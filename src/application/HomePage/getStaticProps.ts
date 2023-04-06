import { GetStaticProps } from 'next'
import { BLOGS_PER_PAGE } from './components/ExploreBlogs/ExploreBlogs'
import { TagsPerPage } from './components/Tags'

const getStaticProps: GetStaticProps = async () => {
  const getTags = (await import('@/services/getTags')).default
  const getBlogs = (await import('@/services/getBlogs')).default

  const tagsOnLargeScreen = await getTags({
    page: 1,
    perPage: TagsPerPage.Large,
  })

  const tagsOnSmallScreen = await getTags({
    page: 1,
    perPage: TagsPerPage.Small,
  })

  const blogs = await getBlogs({
    page: 1,
    perPage: BLOGS_PER_PAGE,
  })

  return {
    props: {
      fallback: {
        [`/api/tags?perPage=${TagsPerPage.Large}`]: tagsOnLargeScreen,
        [`/api/tags?perPage=${TagsPerPage.Small}`]: tagsOnSmallScreen,
        [`/api/blogs?perPage=${BLOGS_PER_PAGE}`]: blogs,
      },
    },
  }
}

export default getStaticProps

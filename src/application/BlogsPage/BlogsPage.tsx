import Layout from '@/application/Layout'
import BlogOverview from '@/application/BlogOverview'
import LoadMoreButton from '@/application/LoadMoreButton'
import Tag from '@/types/Tag'
import { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'
import Loading from '@/components/Loading'
import Container from '@/components/Container'
import TagsFilter from './components/TagsFilter'
import useBlogs from './hooks/useBlogs'

const BlogsPage: NextPage = () => {
  const { query } = useRouter()

  const selectedTags = query.tags ? (query.tags as string).split(',') : []
  const setSelectedTags = (tagName: Tag['name']): void => {
    const newTags = selectedTags.includes(tagName)
      ? selectedTags.filter((name) => name !== tagName)
      : [...selectedTags, tagName]

    Router.push(`/blogs?tags=${newTags}`)
  }

  const {
    blogs,
    size,
    setSize,
    isLoadMoreDisabled,
    isLoading: isBlogsLoading,
  } = useBlogs({
    tags: selectedTags,
  })

  const { data: tags, isLoading: isTagsLoading } = useSWR<Tag[]>('/api/tags')

  return (
    <Layout>
      <Container>
        {isTagsLoading ? (
          <div className="h-[700px] flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          <section className="flex">
            <div className="min-w-[300px] border-r">
              <div className="pr-5 mt-9">
                <div>Filters</div>
                <div>
                  {tags && (
                    <TagsFilter
                      tags={tags}
                      selectedTags={selectedTags}
                      onTagSelect={(name) => setSelectedTags(name)}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="grow py-9 px-5 mx-3 min-h-[700px]">
              <div className="mb-4">
                <h1 className="text-3xl font-bold">All Blogs</h1>
              </div>
              <div className="text-on-background">See what&apos;s new on the blog</div>
              {isBlogsLoading ? (
                <div className="mt-[200px]">
                  <Loading />
                </div>
              ) : (
                <>
                  <div className="mt-6">
                    {blogs.map((blog) => (
                      <div key={blog.id} className="mb-6">
                        <Link href={`/blogs/${blog.id}`}>
                          <BlogOverview
                            title={blog.title}
                            date={blog.createdAt}
                            tags={blog.tags}
                            avatar={{
                              src: blog.user?.image,
                              alt: blog.user?.name || 'Unknown user',
                            }}
                          >
                            {blog.description}
                          </BlogOverview>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div>
                    <LoadMoreButton
                      hasMore={!isLoadMoreDisabled}
                      onLoadMore={() => setSize(size + 1)}
                    >
                      More Blogs
                    </LoadMoreButton>
                  </div>
                </>
              )}
            </div>
          </section>
        )}
      </Container>
    </Layout>
  )
}

export default BlogsPage

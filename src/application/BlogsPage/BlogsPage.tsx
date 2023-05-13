import Layout from '@/application/Layout'
import BlogOverview from '@/application/BlogOverview'
import LoadMoreButton from '@/application/LoadMoreButton'
import Tag from '@/types/Tag'
import { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import Loading from '@/components/Loading'
import Container, { Space } from '@/components/Container'
import useIsScreen, { Screen } from '@/hooks/useIsScreen'
import Button, { Variant, Size } from '@/components/Button'
import LogoModal from '@/application/LogoModal/LogoModal'
import { BiCategory } from 'react-icons/bi'
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

  const isSmallScreen = useIsScreen(Screen.Small)
  const [isFilterModalOpen, setIsFilterMoadalOpen] = useState(false)

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
      <Container space={Space.Small}>
        {isTagsLoading ? (
          <div className="h-[660px] pt-52 flex justify-center">
            <Loading />
          </div>
        ) : (
          <section className="flex flex-col md:flex-row">
            {!isSmallScreen && (
              <div className="min-w-[300px] border-r">
                <div className="pr-5 mt-9 mb-[120px]">
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
            )}
            {isSmallScreen && (
              <>
                <Button
                  className="my-3 flex items-center justify-center gap-1"
                  variant={Variant.Outline}
                  size={Size.Small}
                  onClick={() => setIsFilterMoadalOpen(true)}
                >
                  <BiCategory />
                  <div>Filter</div>
                </Button>
                {isFilterModalOpen && (
                  <LogoModal onClose={() => setIsFilterMoadalOpen(false)}>
                    <div className="min-w-[300px] border-r">
                      <div className="px-5 mt-9 mb-[120px]">
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
                  </LogoModal>
                )}
              </>
            )}

            <div className="grow ml-3 pt-9 pb-[75px] px-5 min-h-[860px]">
              <div className="mb-4">
                <h1 className="text-3xl font-bold">All Blogs</h1>
              </div>
              <div className="text-on-background">See what&apos;s new on the blog</div>
              {isBlogsLoading ? (
                <div className="mt-40">
                  <Loading />
                </div>
              ) : (
                <>
                  <div className="mt-6">
                    {blogs.map((blog) => (
                      <div key={blog.id} className="mb-5">
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
                  <LoadMoreButton
                    hasMore={!isLoadMoreDisabled}
                    onLoadMore={() => setSize(size + 1)}
                  >
                    More Blogs
                  </LoadMoreButton>
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

import Layout from '@/application/Layout'
import TagsFilter from '@/application/TagsFilter'
import BlogOverview from '@/components/BlogOverview'
import LoadMoreButton from '@/components/LoadMoreButton'
import Tag from '@/types/Tag'
import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import Container from '@/components/Container'
import useBlogs from './hooks/useBlogs'

const BlogsPage: NextPage = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>()

  const { blogs, size, setSize, isLoadMoreDisabled } = useBlogs({
    tags: selectedTags,
  })

  const { data: tags } = useSWR<Tag[]>('/api/tags')

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>

      <Layout>
        <Container>
          <section className="flex">
            <div className="w-[300px] ml-6 border-r">
              <div className="pr-5 my-9">
                <div className="font-medium">Filters</div>
                <div className="mt-3" />
              </div>
              <div>
                {tags ? (
                  <TagsFilter
                    tags={tags}
                    selectedTags={selectedTags}
                    onTagSelect={(tag) => {
                      setSelectedTags((currentTags) => {
                        if (currentTags?.includes(tag)) {
                          return currentTags.filter((currentTag) => currentTag.id !== tag.id)
                        }

                        return [...(currentTags || []), tag]
                      })
                    }}
                  />
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>

            <div className="grow py-9 px-5 mx-3">
              <div className="mb-4">
                <h1 className="text-3xl font-bold">All Blogs</h1>
              </div>
              <div className="text-on-background">See what&apos;s new on the blog</div>
              <div className="mt-6">
                {blogs.map((blog) => (
                  <div key={blog.id} className="mb-6">
                    <BlogOverview
                      id={blog.id}
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
                  </div>
                ))}
              </div>
              <div>
                <LoadMoreButton hasMore={!isLoadMoreDisabled} onLoadMore={() => setSize(size + 1)}>
                  More Blogs
                </LoadMoreButton>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default BlogsPage

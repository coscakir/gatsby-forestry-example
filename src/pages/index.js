import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import usePosts from "../hooks/use-post"
import PostPreview from "../components/post-preview"

const IndexPage = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>

      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default IndexPage

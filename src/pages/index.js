import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import usePosts from "../hooks/use-post"
import PostPreview from "../components/post-preview"

const IndexPage = () => {
  const posts = usePosts()
  debugger
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>

      {posts.map(post => (
        <PostPreview key={post.title} post={post} />
      ))}
    </Layout>
  )
}

export default IndexPage

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const PostTemplate = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p>{post.frontmatter.date}</p>
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />
  </Layout>
)

export default PostTemplate

import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            draft
            title
            slug
            date
          }
          excerpt
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes.map(post => ({
    draft: post.frontmatter.draft,
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    excerpt: post.excerpt,
  }))
}

export default usePosts

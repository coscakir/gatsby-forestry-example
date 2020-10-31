import React from "react"
import { Link } from "gatsby"

export default function PostPreview({ post }) {
  return (
    <article
      style={{ padding: "1rem 2rem", background: "#eee", marginBottom: "1rem" }}
    >
      <h3>{post.title}</h3>
      <i>{post.date}</i>
      <p>{post.excerpt}</p>
      <Link to={post.slug}>read more &rarr;</Link>
    </article>
  )
}

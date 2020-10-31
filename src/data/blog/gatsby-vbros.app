---
date: 2020-10-31T20:29:34Z
draft: false
title: Gatsby VBros
slug: gatsby-bros

---
 
# gatsby bros

![gatsby](/uploads/nasa-q1p7bh3shj8-unsplash.jpg)

Parsing algorithm

It recognizes files with the following extensions as Markdown:

* md
* markdown

Each Markdown file is parsed into a node of type `MarkdownRemark`.

All frontmatter fields are converted into GraphQL fields. TODO link to docs on auto-inferring types/fields.

This plugin adds additional fields to the `MarkdownRemark` GraphQL type including `html`, `excerpt`, `headings`, etc. Other Gatsby plugins can also add additional fields.
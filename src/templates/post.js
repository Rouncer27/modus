import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/post/Hero"
import ArticleTitle from "../components/post/ArticleTitle"

const post = props => {
  const { post } = props.data
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next

  console.log("post", post)
  console.log("prevPost", prevPost)
  console.log("nextPost", nextPost)

  return (
    <Layout>
      <Hero data={post.postComponents.featuredImage} />
      <ArticleTitle title={post.title} />
    </Layout>
  )
}

export const query = graphql`
  query singlePostQuery($slug: String!) {
    post: wpPost(slug: { eq: $slug }) {
      postComponents {
        excerpt
        featuredImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 3000)
            }
          }
        }
      }
      title
      id
      date
      slug
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`

export default post

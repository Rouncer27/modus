import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/post/Hero"
import ArticleTitle from "../components/post/ArticleTitle"
import BaseWysiwyg from "../components/ContentWysiwygText/BaseWysiwyg/BaseWysiwyg"
import styled from "styled-components"
import { standardWrapper } from "../styles/helpers"
import SliderThree from "../components/SliderBlocks/SliderThree"
import PostNav from "../components/post/PostNav"

const post = props => {
  const seoInfo = props.data.seoInfo
  const { post } = props.data
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next

  // console.log("post", post)
  // console.log("prevPost", prevPost)
  // console.log("nextPost", nextPost)

  return (
    <Layout>
      <Seo
        title={
          seoInfo?.seoFields?.seoFieldsMetaTitle
            ? seoInfo?.seoFields?.seoFieldsMetaTitle
            : "MODUS - Building beter for a better world"
        }
        description={seoInfo?.seoFields?.seoFieldsMetaContent}
        metaImg={seoInfo?.seoFields?.seoFieldsMetaImage?.mediaItemUrl}
        location={props?.location?.pathname}
      />
      <Hero data={post.postComponents.featuredImage} />
      <ArticleWrapper>
        <ArticleTitle
          title={post.title}
          subTitle={post.postComponents.subTitleLocation}
          date={post.date}
        />
        <BaseWysiwyg data={post.postComponents.mainContent} />
      </ArticleWrapper>
      {!!post.postComponents.bottomSlider && (
        <SliderThree data={{ slides: post.postComponents.bottomSlider }} />
      )}
      <PostNav data={{ prev: prevPost, next: nextPost }} />
    </Layout>
  )
}

const ArticleWrapper = styled.article`
  ${standardWrapper};
`

export const query = graphql`
  query singlePostQuery($slug: String!) {
    seoInfo: wpPost(slug: { eq: $slug }) {
      seoFields {
        seoFieldsMetaTitle
        seoFieldsMetaContent
        seoFieldsMetaImage {
          mediaItemUrl
        }
      }
    }

    post: wpPost(slug: { eq: $slug }) {
      postComponents {
        subTitleLocation
        excerpt
        mainContent
        featuredImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 3000)
            }
          }
        }

        bottomSlider {
          slide {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 3000)
              }
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

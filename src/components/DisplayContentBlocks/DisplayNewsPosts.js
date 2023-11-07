import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { H1White, H2White } from "../../styles/helpers"

const getData = graphql`
  {
    posts: allWpPost(limit: 4, sort: { order: DESC, fields: date }) {
      nodes {
        title
        id
        slug
        postComponents {
          featuredImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 3000)
              }
            }
          }
        }
      }
    }
  }
`

const DisplayNewsPosts = ({ data }) => {
  console.log("DisplayNewsPosts: ", data)
  const postsData = useStaticQuery(getData)
  console.log("postsData: ", postsData)
  return (
    <StyledSection>
      <div className="wrapper">
        {postsData.posts.nodes.map((post, index) => {
          const imageDisplay = getImage(
            post.postComponents.featuredImage.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageAlt = post.postComponents.featuredImage.altText
          return (
            <StyledArticle className="article-link" key={post.id}>
              <Link to={`/project-news/${post.slug}`}>
                <div className="article-title">
                  <h2>{post.title}</h2>
                </div>
                <div className="featured-image">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
                <div className="post-number">
                  <p>0{index + 1}</p>
                </div>
              </Link>
            </StyledArticle>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .article-link {
    @media (min-width: 768px) {
      margin-top: 0;
      margin-right: 0.25rem;
      margin-left: 0.25rem;
      width: calc((100% / 4) - 0.75rem);
    }

    &:nth-of-type(1) {
      @media (min-width: 768px) {
        margin-right: 0.5rem;
        margin-left: 0;
      }
    }

    &:nth-of-type(2) {
      @media (min-width: 768px) {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      }
    }

    &:nth-of-type(3) {
      @media (min-width: 768px) {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      }
    }

    &:nth-of-type(4) {
      @media (min-width: 768px) {
        margin-right: 0;
        margin-left: 0.5rem;
      }
    }
  }
`

const StyledArticle = styled.article`
  position: relative;

  @media (min-width: 1025px) {
    height: 85rem;
  }

  .article-title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;

    h2 {
      ${H2White};
      position: absolute;
      top: 7.5rem;
      right: -77rem;
      margin: 0;
      width: 80rem;
      transform-origin: center left;
      transform: rotate(90deg) translateX(0%);
      text-transform: uppercase;
    }
  }

  .post-number {
    position: absolute;
    z-index: 100;
    top: 2rem;
    right: 2rem;

    p {
      ${H1White};
      font-weight: bold;
    }
  }

  .featured-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    width: 101%;
    height: 100%;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default DisplayNewsPosts

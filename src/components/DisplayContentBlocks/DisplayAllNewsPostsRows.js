import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B2Black,
  colors,
  H2White,
  H1White,
  standardWrapper,
  medWrapper,
  H3White,
  H4White,
  B1White,
} from "../../styles/helpers"

const getData = graphql`
  {
    posts: allWpPost(limit: 4, sort: { order: DESC, fields: date }) {
      nodes {
        title
        id
        slug
        postComponents {
          subTitleLocation
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
      }
    }

    postsRest: allWpPost(skip: 4, sort: { order: DESC, fields: date }) {
      nodes {
        title
        id
        slug
        postComponents {
          subTitleLocation
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

const DisplayAllNewsPostsRows = ({ data }) => {
  const postsData = useStaticQuery(getData)

  console.log("postsData", postsData)

  return (
    <StyledSection>
      <div className="posts-start">
        {postsData.posts.nodes.map((post, index) => {
          const imageDisplay = getImage(
            post.postComponents.featuredImage.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageAlt = post.postComponents.featuredImage.altText
          return (
            <StyledIntroArticle className="article-link" key={post.id}>
              <Link to={`/projects-news/${post.slug}`}>
                <div className="article-title">
                  <h2>{post.title}</h2>
                  <h3>{post.postComponents.subTitleLocation}</h3>
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
            </StyledIntroArticle>
          )
        })}
      </div>
      <div className="wrapper">
        <div className="posts-rest">
          {postsData.postsRest.nodes.map((post, index) => {
            const imageDisplay = getImage(
              post.postComponents.featuredImage.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = post.postComponents.featuredImage.altText
            return (
              <StyledArticle className="article-link" key={post.id}>
                <Link to={`/projects-news/${post.slug}`}>
                  <div className="featured-image">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </div>
                  <div className="article-excerpt">
                    <div className="article-title">
                      <h2>{post.title}</h2>
                      <h3>{post.postComponents.subTitleLocation}</h3>
                    </div>
                  </div>
                </Link>
              </StyledArticle>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 5rem;
  margin-bottom: 1.5rem;

  .wrapper {
    ${medWrapper};
    justify-content: flex-start;
  }

  .posts-rest,
  .posts-start {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .posts-start {
    .article-link {
      width: calc((100% / 2) - 0.5rem);
      margin-top: 0.5rem;
      margin-right: 0.25rem;
      margin-left: 0.25rem;

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
  }
`

const StyledIntroArticle = styled.article`
  position: relative;
  height: 50rem;

  @media (min-width: 768px) {
    height: 65rem;
  }

  @media (min-width: 1025px) {
    height: 85rem;
  }

  .article-title {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    position: absolute;
    top: 10rem;
    left: 0;
    right: 1.5rem;
    bottom: 10rem;
    z-index: 100;
    h2 {
      ${H2White};
      margin-top: 2rem;
      text-orientation: sideways;
      writing-mode: vertical-rl;
      text-transform: uppercase;
    }

    h3 {
      ${H3White};
      margin-top: 2rem;
      text-orientation: sideways;
      writing-mode: vertical-rl;
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

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const StyledArticle = styled.article`
  width: 100%;
  margin-top: 2.5rem;
  margin-bottom: 5rem;
  position: relative;
  height: 40rem;

  @media (min-width: 768px) {
    width: calc((100% / 3) - 1rem);
    margin-right: 0.5rem;
    margin-bottom: 4.5rem;
    margin-left: 0.5rem;
    height: 50rem;
  }

  @media (min-width: 1025px) {
    height: 50rem;
  }

  .article-title {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.3);
    h2 {
      ${H3White};
      margin-bottom: 0;
      text-transform: uppercase;
    }

    h3 {
      ${B1White};
      text-transform: uppercase;
    }
  }

  .featured-image {
    position: absolute;
    width: 100%;
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

export default DisplayAllNewsPostsRows

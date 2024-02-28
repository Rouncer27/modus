import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { H1White, H2White, H3White } from "../../styles/helpers"

const getData = graphql`
  {
    posts: allWpPost(limit: 4, sort: { order: DESC, fields: date }) {
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

const DisplayNewsPosts = ({ data }) => {
  const postsData = useStaticQuery(getData)
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
`

const StyledArticle = styled.article`
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
      padding: 1rem;
      text-orientation: sideways;
      writing-mode: vertical-rl;
      text-transform: uppercase;
      background-color: rgba(0, 0, 0, 0.5);
    }

    h3 {
      ${H3White};
      margin-top: 2rem;
      padding: 1rem;
      text-orientation: sideways;
      writing-mode: vertical-rl;
      text-transform: uppercase;
      background-color: rgba(0, 0, 0, 0.5);
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

export default DisplayNewsPosts

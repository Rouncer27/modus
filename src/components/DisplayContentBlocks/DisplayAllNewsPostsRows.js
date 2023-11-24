import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B2Black, colors, standardWrapper } from "../../styles/helpers"

const getData = graphql`
  {
    posts: allWpPost(sort: { order: DESC, fields: date }) {
      nodes {
        title
        id
        slug
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
      }
    }
  }
`

const DisplayAllNewsPostsRows = ({ data }) => {
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
              <Link to={`/project-news/${post.slug}`}>
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
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.postComponents.excerpt,
                    }}
                  />
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
    ${standardWrapper};
    justify-content: flex-start;
  }
`

const StyledArticle = styled.article`
  width: 100%;
  margin-bottom: 2.5rem;
  position: relative;
  border: solid 0.2rem ${colors.colorPrimary};

  @media (min-width: 768px) {
    width: calc((100% / 3) - 1rem);
    margin-right: 0.5rem;
    margin-bottom: 4.5rem;
    margin-left: 0.5rem;
  }

  @media (min-width: 1025px) {
  }

  .article-excerpt {
    width: 100%;
    padding: 2rem;

    p {
      ${B2Black};
    }
  }

  .article-title {
    h2 {
      ${B2Black};
      margin-bottom: 2rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .featured-image {
    position: relative;
    width: 100%;
    height: 30rem;

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

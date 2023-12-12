import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { H2White, H3Black, medWrapper } from "../../styles/helpers"
import { Link } from "gatsby"

const BoxLinks = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>{data.sectionTitle}</h2>
        </div>
        <div className="box-links">
          {data.boxLinks.map((box, index) => {
            const imageDisplay = getImage(
              box.image.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = box.image.altText
            return (
              <BoxLink className="box-link" key={index}>
                <Link to={box.pageLink.uri}>
                  <div className="content">
                    <div className="content__inner">
                      <h3>{box.title}</h3>
                    </div>
                  </div>
                  <div className="bg-image">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </div>
                </Link>
              </BoxLink>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding-bottom: 6rem;

  .wrapper {
    ${medWrapper};
    margin-top: 0;
  }

  .title {
    width: 100%;
    padding-bottom: 3rem;
    text-align: center;

    h2 {
      ${H3Black};
      text-decoration: underline;
      color: rgba(0, 0, 0, 0.48);
    }
  }

  .box-links {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .box-link {
      &:nth-of-type(4n + 1) {
        .content {
          background-color: rgba(150, 188, 197, 0.83);
        }

        &:hover {
          .content {
            background-color: rgba(0, 88, 72, 0.7);
          }
        }
      }

      &:nth-of-type(4n + 2) {
        .content {
          background-color: rgba(0, 88, 72, 0.7);
        }

        &:hover {
          .content {
            background-color: rgba(150, 188, 197, 0.83);
          }
        }
      }

      &:nth-of-type(4n + 3) {
        .content {
          background-color: rgba(0, 88, 72, 0.7);
        }

        &:hover {
          .content {
            background-color: rgba(150, 188, 197, 0.83);
          }
        }
      }

      &:nth-of-type(4n + 4) {
        .content {
          background-color: rgba(150, 188, 197, 0.83);
        }

        &:hover {
          .content {
            background-color: rgba(0, 88, 72, 0.7);
          }
        }
      }
    }
  }
`

const BoxLink = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    width: calc(50% - 2rem);
    margin-bottom: 0;
  }

  &:nth-of-type(1n + 2) {
    @media (min-width: 768px) {
      margin-left: 2rem;
    }
  }

  &:nth-of-type(2n + 1) {
    @media (min-width: 768px) {
      margin-right: 2rem;
    }
  }

  .bg-image {
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

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    transition: all 0.3s ease-out;
    z-index: 100;

    &__inner {
      margin: 2rem;
      padding: 2rem 4rem;
      border: solid 0.1rem #fff;

      @media (min-width: 768px) {
        padding: 2rem 4rem;
      }

      @media (min-width: 1025px) {
        padding: 4rem 8rem;
      }

      h3 {
        ${H2White};
        margin: 0;
        text-align: center;
      }
    }
  }
`

export default BoxLinks

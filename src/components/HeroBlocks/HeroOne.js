import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { H1White, H3White, colors, medWrapper } from "../../styles/helpers"

const HeroOne = ({ data }) => {
  const imageDisplay = getImage(
    data.heroImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.heroImage.altText
  return (
    <StyledSection>
      <div className="hero-image">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      {data.heroContent.title ||
        (data.heroContent.content && (
          <div className="hero-content">
            <div className="hero-content__inner">
              {data.heroContent.title && (
                <div className="title">
                  <h2
                    dangerouslySetInnerHTML={{ __html: data.heroContent.title }}
                  />
                </div>
              )}
              {data.heroContent.content && (
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: data.heroContent.content }}
                />
              )}
            </div>
          </div>
        ))}
      <div className="overlay" />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  height: 50rem;

  @media (min-width: 768px) {
    height: 60rem;
  }

  @media (min-width: 1025px) {
    height: 89rem;
  }

  @media (min-width: 1250px) {
    height: 100vh;
    min-height: 70rem;
  }

  .overlay {
    background: linear-gradient(to bottom, #fff 0%, transparent 40%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;

    @media (min-width: 768px) {
      display: none;
      background: linear-gradient(to bottom, #fff 0%, transparent 30%);
    }
  }

  .hero-image {
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

  .hero-content {
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(to top, #000 0%, #000 20%, transparent 100%);

    @media (min-width: 768px) {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
    }

    &__inner {
      ${medWrapper};
      padding: 5rem 3rem;
    }

    .title {
      position: relative;
      width: 100%;
      margin-bottom: 2.5rem;
      padding-bottom: 2.5rem;

      &::before {
        position: absolute;
        width: 17.7rem;
        height: 1rem;
        bottom: 0;
        background-color: ${colors.colorPrimary};
        content: "";
      }

      h2 {
        ${H1White};
        margin: 0;
      }
    }

    p {
      ${H3White};
      margin: 0;
    }
  }
`

export default HeroOne

import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, H2Black, medWrapper } from "../../styles/helpers"

const FlexibleContentStaggeredImages = ({ data }) => {
  const imageOneDisplay = getImage(
    data.images[0].image.localFile.childImageSharp.gatsbyImageData
  )
  const imageOneAlt = data.images[0].image.altText
  const imageTwoDisplay = getImage(
    data.images[1].image.localFile.childImageSharp.gatsbyImageData
  )
  const imageTwoAlt = data.images[1].image.altText
  const imageThreeDisplay = getImage(
    data.images[2].image.localFile.childImageSharp.gatsbyImageData
  )
  const imageThreeAlt = data.images[2].image.altText
  const imageFourDisplay = getImage(
    data.images[3].image.localFile.childImageSharp.gatsbyImageData
  )
  const imageFourAlt = data.images[3].image.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="content">
          <div className="content__title">
            <h2>{data.mainTitle}</h2>
          </div>
          <div className="content__display">
            {data.contentType === "list" ? (
              <ul>
                {data.listItems.map((item, index) => (
                  <li key={index}>{item.listItem}</li>
                ))}
              </ul>
            ) : data.contentType === "text" ? (
              <div
                className="text-content"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
            ) : data.contentType === "wysiwyg" ? (
              <div
                className="wysiwyg-content"
                dangerouslySetInnerHTML={{ __html: data.wysiwygContent }}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="images">
          <div className="images__top">
            <div className="single-image">
              <GatsbyImage
                image={imageOneDisplay}
                alt={imageOneAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
            <div className="single-image">
              <GatsbyImage
                image={imageTwoDisplay}
                alt={imageTwoAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
          <div className="images__bot">
            <div className="single-image">
              <GatsbyImage
                image={imageThreeDisplay}
                alt={imageThreeAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
            <div className="single-image">
              <GatsbyImage
                image={imageFourDisplay}
                alt={imageFourAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding-top: 5rem;
  .wrapper {
    ${medWrapper};
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(45% - 5rem);
      margin-right: 5rem;
    }

    &__title {
      width: 100%;

      h2 {
        ${H2Black};
      }
    }

    &__display {
      width: 100%;

      ul {
        width: 100%;

        li {
          ${B1Black};
          position: relative;
          padding-left: 1.5rem;

          &::before {
            position: absolute;
            top: 0;
            left: 0;
            content: "-";
          }
        }
      }

      .text-content {
        p {
          ${B1Black};
        }
      }
    }
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: calc(100%);
    margin-top: 3rem;

    @media (min-width: 768px) {
      width: calc(55%);
      margin-top: 0;
    }

    &__top {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: calc(100%);
      margin-bottom: 0.5rem;

      @media (min-width: 768px) {
        width: calc(100% - 7.5rem);
        margin-right: 7.5rem;
      }

      @media (min-width: 1025px) {
        width: calc(100% - 18rem);
        margin-right: 18rem;
      }
    }

    &__bot {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: calc(100%);

      @media (min-width: 768px) {
        width: calc(100% - 7.5rem);
        margin-left: 7.5rem;
      }

      @media (min-width: 1025px) {
        width: calc(100% - 18rem);
        margin-left: 18rem;
      }
    }

    .single-image {
      width: calc(50% - 0.25rem);

      &:nth-of-type(1) {
        margin-right: 0.25rem;
      }

      &:nth-of-type(2) {
        margin-left: 0.25rem;
      }

      &:nth-of-type(3) {
        margin-right: 0.25rem;
      }

      &:nth-of-type(4) {
        margin-left: 0.25rem;
      }
    }
  }
`

export default FlexibleContentStaggeredImages

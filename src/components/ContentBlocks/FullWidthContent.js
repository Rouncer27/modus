import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BtnPrimaryWhite, H1White, H3White, colors } from "../../styles/helpers"
import { Link } from "gatsby"

const FullWidthContent = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <StyledSection
      className={`${data.openingTopPaddingRequired ? "opeing-top " : ""}${
        data.backgroundColor === "sky"
          ? "bg-sky "
          : data.backgroundColor === "green"
          ? "bg-green "
          : data.backgroundColor === "black"
          ? "bg-black "
          : "bg-sky "
      }`}
    >
      <div className="wrapper">
        <div className="image">
          <div className="image__wrapper">
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="content">
          <div className="content__title">
            <h1>{data.title}</h1>
          </div>
          <div
            className="content__paragraph"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          <div className="content__link">
            <Link to={data.pageLink.uri}>{data.buttonText}</Link>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  &.opeing-top {
    padding-top: 15rem;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .image {
    position: relative;
    width: 100%;
    min-height: 40rem;

    @media (min-width: 768px) {
      width: calc(37.5%);
    }

    @media (min-width: 1025px) {
      min-height: 70rem;
    }

    &__wrapper {
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
  }

  .content {
    position: relative;
    width: 100%;
    padding: 2rem 2rem 4rem 2rem;
    background-color: ${colors.colorPrimary};

    @media (min-width: 768px) {
      width: calc(62.5%);
      padding: 8rem 8rem 12rem 8rem;
    }

    &__link {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 100;

      a {
        ${BtnPrimaryWhite};
      }
    }

    h1 {
      ${H1White};
      text-transform: uppercase;
    }

    p {
      ${H3White};
    }
  }

  &.bg-sky {
    .content {
      background-color: ${colors.colorPrimary};
    }
  }

  &.bg-green {
    .content {
      background-color: ${colors.colorSecondary};
    }
  }

  &.bg-black {
    .content {
      background-color: #333333;
    }
  }
`

export default FullWidthContent

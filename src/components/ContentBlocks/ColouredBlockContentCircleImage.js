import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1White,
  BtnPrimaryWhite,
  H2White,
  colors,
  medWrapper,
} from "../../styles/helpers"

const ColouredBlockContentCircleImage = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <StyledSection className={`background-${data.backgroundColour} `}>
      <div className="wrapper">
        <div className="image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>

        <div className="content">
          <div className="content__title">
            <h2>{data.title}</h2>
          </div>
          <div
            className="content__para"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          <div className="content__button">
            {data.buttonType === "email" ? (
              <a href={`mailto: ${data.emailLink}`}>{data.buttonText}</a>
            ) : data.buttonType === "external" ? (
              <a target="_blank" rel="noopener" href={`${data.urlLink}`}>
                {data.buttonText}
              </a>
            ) : data.buttonType === "internal" ? (
              <Link to={data.pageLink.uri}>{data.buttonText}</Link>
            ) : null}
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 6rem 0;

  &.background-green {
    background-color: ${colors.colorSecondary};
  }

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(25% - 2rem);
      margin-right: 2rem;
    }
  }

  .content {
    width: calc(100%);
    text-align: center;

    @media (min-width: 768px) {
      width: calc(75% - 4rem);
      margin-left: 4rem;
    }

    &__title {
      width: 100%;

      h2 {
        ${H2White};
      }
    }

    &__para {
      width: 100%;

      p {
        ${B1White};
      }
    }

    &__button {
      width: 100%;

      a {
        ${BtnPrimaryWhite};
      }
    }
  }
`

export default ColouredBlockContentCircleImage

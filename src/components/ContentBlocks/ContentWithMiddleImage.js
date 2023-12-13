import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1White,
  BigWrapper,
  BtnPrimaryGreen,
  H2White,
  colors,
} from "../../styles/helpers"

const ContentWithMiddleImage = ({ data }) => {
  const imageDisplay = getImage(
    data.centerImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.centerImage.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="left-content">
          <h2>{data.leftContent.content}</h2>
        </div>
        <div className="center-content">
          <div className="center-content__wrapper">
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="right-content">
          <div
            className="right-content__bold"
            dangerouslySetInnerHTML={{ __html: data.rightContent.boldContent }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: data.rightContent.content }}
          />
          {!!data.rightContent.button.buttonRequired && (
            <div className="btn-sec">
              <Link to={`${data.rightContent.button.pageLink.uri}`}>
                {data.rightContent.button.buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 2rem;
  background: ${colors.colorSecondary};

  @media (min-width: 768px) {
    background: linear-gradient(
      to right,
      #333333 0%,
      #333333 50%,
      ${colors.colorSecondary} 50%,
      ${colors.colorSecondary} 100%
    );
  }
  .wrapper {
    ${BigWrapper};
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
  }

  .left-content {
    width: 100%;
    padding-top: 4rem;

    @media (min-width: 768px) {
      width: calc(37.5%);
      padding: 4rem 2rem;
    }

    h2 {
      ${H2White};
      text-align: center;
      text-transform: uppercase;
    }
  }

  .center-content {
    position: relative;
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    height: 40rem;

    @media (min-width: 768px) {
      width: calc(25%);
      margin-top: 0;
      margin-bottom: 0;
      height: 40rem;
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

  .right-content {
    position: relative;
    width: 100%;
    padding-bottom: 4rem;

    @media (min-width: 768px) {
      width: calc(37.5%);
      padding: 4rem;
      padding-bottom: 10rem;
    }

    p {
      ${B1White};

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    &__bold {
      p {
        font-weight: bold;
      }
    }

    .btn-sec {
      position: absolute;
      bottom: 0;
      right: 0;

      a {
        ${BtnPrimaryGreen};
        background-color: rgba(150, 188, 197, 0.35);
        color: ${colors.white};

        &:hover {
          background: ${colors.colorTertiary};
        }

        &:disabled {
          &:hover {
            background: ${colors.colorTertiary};
            color: ${colors.colorPrimary};
          }
        }
      }
    }
  }
`

export default ContentWithMiddleImage

import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { B1White, BigWrapper } from "../../styles/helpers"

const BoxImageLinks = ({ data }) => {
  console.log("BoxImageLinks: ", data)
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="links">
          {data.boxLinks.map((box, index) => {
            const imageDisplay = getImage(
              box.image.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = box.image.altText

            return (
              <StyledLinkBox className="box-link" key={index}>
                <Link to={`${box.pageLink.uri}`}>
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
                      <h3>{box.title}</h3>
                    </div>
                  </div>
                </Link>
              </StyledLinkBox>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${BigWrapper};
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    .box-link {
      margin-top: 2.5rem;

      @media (min-width: 768px) {
        margin-top: 0;
        margin-right: 0.75rem;
        margin-left: 0.75rem;
        width: calc((100% / 3) - 1.5rem);
      }

      &:nth-of-type(3n + 1) {
        @media (min-width: 768px) {
          margin-right: 1.5rem;
          margin-left: 0;
        }
      }

      &:nth-of-type(3n + 3) {
        @media (min-width: 768px) {
          margin-right: 0;
          margin-left: 1.5rem;
        }
      }
    }
  }
`

const StyledLinkBox = styled.div`
  position: relative;

  .content {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 2.5rem;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    h3 {
      ${B1White};
      margin: 0;
      text-align: center;
      text-transform: uppercase;
    }
  }
`

export default BoxImageLinks

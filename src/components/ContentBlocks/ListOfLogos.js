import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { H2Black, medWrapper } from "../../styles/helpers"

const ListOfLogos = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        {!!data.sectionTitle && (
          <div className="title">
            <h2>{data.sectionTitle}</h2>
          </div>
        )}
        {data.logos.map((logo, index) => {
          const logoDisplay = getImage(
            logo.logo.localFile.childImageSharp.gatsbyImageData
          )
          const logoAlt = logo.logo.altText
          return (
            <SingleLogo key={index}>
              <GatsbyImage
                image={logoDisplay}
                alt={logoAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </SingleLogo>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  .wrapper {
    ${medWrapper};
    justify-content: flex-start;
  }

  .title {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;

    h2 {
      ${H2Black};
    }
  }
`

const SingleLogo = styled.div`
  width: calc(50% - 2rem);
  margin: 1rem;

  @media (min-width: 768px) {
    width: calc(25% - 4rem);
    margin: 2rem;
  }

  @media (min-width: 1025px) {
    width: calc(20% - 10rem);
    margin: 3rem 5rem;
  }
`

export default ListOfLogos

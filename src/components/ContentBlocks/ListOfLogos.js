import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { medWrapper } from "../../styles/helpers"

const ListOfLogos = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
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
  }
`

const SingleLogo = styled.div`
  width: calc(50%);

  @media (min-width: 768px) {
    width: calc(25%);
  }

  @media (min-width: 1025px) {
    width: calc(20% - 10rem);
    margin: 0 5rem;
  }
`

export default ListOfLogos

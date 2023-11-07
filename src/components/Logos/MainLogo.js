import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const getData = graphql`
  {
    logo: wp {
      acfOptionsSiteWideSettings {
        siteWideOptions {
          mainLogo {
            altText
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }
        }
      }
    }
  }
`

const MainLogo = () => {
  const data = useStaticQuery(getData)
  const image = getImage(
    data.logo.acfOptionsSiteWideSettings.siteWideOptions.mainLogo.localFile
      .childImageSharp.gatsbyImageData
  )

  const imageAlt =
    data.logo.acfOptionsSiteWideSettings.siteWideOptions.mainLogo.altText

  return (
    <MainLogoStyled>
      <GatsbyImage
        image={image}
        alt={imageAlt}
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </MainLogoStyled>
  )
}

const MainLogoStyled = styled.div`
  width: 100%;
  height: 100%;
`

export default MainLogo

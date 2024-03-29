import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B3White, BigWrapper, colors } from "../styles/helpers"

import SocialMediaIcon from "./Icons/SocialMediaIcon/SocialMediaIcon"

const getData = graphql`
  {
    footerMenu: wpMenu(name: { eq: "Footer Menu" }) {
      name
      menuItems {
        nodes {
          label
          url
          parentDatabaseId
          parentId
          id
          databaseId
        }
      }
    }

    logos: wp {
      acfOptionsSiteWideSettings {
        siteWideOptions {
          footerMainLogo {
            altText
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1500)
              }
            }
          }

          footerLogoIcon {
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

    socialLinks: wp {
      acfOptionsSiteWideSettings {
        siteWideOptions {
          linkedinUrl
        }
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(getData)
  const { footerMenu, logos, socialLinks } = data
  const footerMainLogo = getImage(
    logos.acfOptionsSiteWideSettings.siteWideOptions.footerMainLogo.localFile
      .childImageSharp.gatsbyImageData
  )
  const footerMainLogoAlt =
    logos.acfOptionsSiteWideSettings.siteWideOptions.footerMainLogo.altText

  const footerLogoIcon = getImage(
    logos.acfOptionsSiteWideSettings.siteWideOptions.footerLogoIcon.localFile
      .childImageSharp.gatsbyImageData
  )
  const footerLogoIconAlt =
    logos.acfOptionsSiteWideSettings.siteWideOptions.footerLogoIcon.altText

  return (
    <StyledFooter>
      <footer>
        <div className="wrapper">
          <div className="footer-top">
            <div className="footer-logo">
              <div className="footer-logo__wrapper">
                <GatsbyImage
                  image={footerMainLogo}
                  alt={footerMainLogoAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            </div>
            <div className="foot-nav-links">
              <nav>
                <ul>
                  {footerMenu.menuItems.nodes.map(item => {
                    const slug = item.url
                      .split("/")
                      .filter(item => item !== "")
                      .join("/")
                    return (
                      <li key={item.id}>
                        <Link to={`/${slug}`}>{item.label}</Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>

            <div className="footer-social">
              <div className="footer-social__links">
                <ul>
                  <SocialMediaIcon
                    data={
                      socialLinks.acfOptionsSiteWideSettings.siteWideOptions
                        .linkedinUrl
                    }
                    type="Linkedin"
                  />
                </ul>
              </div>
              <div className="footer-social__icon">
                <GatsbyImage
                  image={footerLogoIcon}
                  alt={footerLogoIconAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            </div>
          </div>

          <div className="footer-copy">
            <p>
              MODUS Structures Inc © 2023. Designed, and developed by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://switchbackcreative.ca/"
              >
                Switchback Creative
              </a>
            </p>
          </div>
        </div>
      </footer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 4rem 0 2rem;
  background-color: #333333;

  .wrapper {
    ${BigWrapper};
  }

  .footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 5rem;

    .footer-logo {
      width: 100%;

      @media (min-width: 768px) {
        width: 15%;
      }

      &__wrapper {
        margin: 0 auto 2.5rem auto;
        max-width: 20rem;

        @media (min-width: 768px) {
        }
      }
    }

    .foot-nav-links {
      width: calc(100%);
      margin-bottom: 2.5rem;

      @media (min-width: 768px) {
        width: calc(65% - 6rem);
        margin-left: 6rem;
        margin-bottom: 0;
      }

      nav {
        width: 100%;

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;

          li {
            ${B3White};
            width: calc(100% / 1);
            margin-bottom: 1.5rem;
            text-align: center;

            @media (min-width: 768px) {
              width: calc(100% / 4);
              margin-bottom: 0.5rem;
              text-align: left;
            }

            a {
              ${B3White};
              text-transform: uppercase;

              &:hover {
                color: ${colors.colorPrimary};
              }
            }
          }
        }
      }
    }

    .footer-social {
      display: flex;
      width: 100%;

      @media (min-width: 768px) {
        width: 20%;
      }

      &__links {
        width: 100%;
      }

      &__icon {
        display: none;
        width: 100%;
        max-width: 12.5rem;
        margin-top: -2.75rem;

        @media (min-width: 768px) {
          display: block;
        }
      }
    }
  }

  .footer-copy {
    width: 100%;
    text-align: center;

    p {
      ${B3White};
      width: 100%;

      &:last-of-type {
        margin: 0;
      }
    }

    a {
      ${B3White};
    }
  }
`

export default Footer

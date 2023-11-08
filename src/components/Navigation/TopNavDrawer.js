import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Black, colors } from "../../styles/helpers"
import TopNavContainer from "./TopNavContainer"

const getData = graphql`
  {
    mobileMenu: wpMenu(name: { eq: "Main Menu" }) {
      name
      menuItems {
        nodes {
          label
          url
          parentDatabaseId
          parentId
          id
          databaseId
          cssClasses
        }
      }
    }

    logo: wp {
      acfOptionsSiteWideSettings {
        siteWideOptions {
          mainNavLogo {
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

const TopNavDrawer = ({ isOpen, setIsOpen, setBtnChecked }) => {
  const data = useStaticQuery(getData)
  const menuItems = data.mobileMenu.menuItems.nodes
  const navLogo =
    data.logo.acfOptionsSiteWideSettings.siteWideOptions.mainNavLogo

  const image = getImage(navLogo.localFile.childImageSharp.gatsbyImageData)
  const imageAlt = navLogo.altText
  return (
    <NavDrawer className={`${isOpen ? "active" : ""}`}>
      <div className="main-nav-wrapper">
        <div className="side-logo">
          <div className="close-btn">
            <button
              onClick={() => {
                setBtnChecked(false)
                setIsOpen(false)
              }}
              type="button"
            >
              &#10005;
            </button>
          </div>
          <div>
            <GatsbyImage
              image={image}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <TopNavContainer navitems={menuItems} />
      </div>
    </NavDrawer>
  )
}

const NavDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in;
  transform: translateX(100%);
  background: ${colors.white};
  border-radius: 0.25rem;
  box-shadow: 0.5rem 0.5rem 0.25rem 0.1rem rgba(0, 0, 0, 0.25);
  opacity: 0;
  overflow-y: scroll;
  z-index: -99999999;

  @media (min-width: 768px) {
    top: 5rem;
    bottom: 5rem;
    width: 60rem;
    height: auto;
  }

  &.active {
    transform: translateX(-10%);
    opacity: 1;
    z-index: 999999999;
  }

  .main-nav-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .side-logo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 10%;
    height: 100%;
    background-color: #fff;

    .close-btn {
      width: 100%;
      text-align: center;
      padding-top: 4rem;

      button {
        ${B1Black};
        border: none;
        background-color: transparent;
        cursor: pointer;

        &:hover {
          color: ${colors.colorPrimary};
        }
      }
    }
  }
`

export default TopNavDrawer

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { colors } from "../../styles/helpers"
import MainLogo from "../Logos/MainLogo"
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
  }
`

const TopNavDrawer = ({ isOpen, setIsOpen }) => {
  const data = useStaticQuery(getData)
  const menuItems = data.mobileMenu.menuItems.nodes
  return (
    <NavDrawer isOpen={isOpen}>
      <div className="wrapper">
        <div className="mobileLogo">
          <MainLogo />
        </div>
        <TopNavContainer navitems={menuItems} setIsOpen={setIsOpen} />
      </div>
    </NavDrawer>
  )
}

const NavDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in;
  transform: translateX(${props => (props.isOpen ? "0%" : "100%")});
  background: ${colors.colorPrimary};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: ${props => (props.isOpen ? 999999999 : -9999999)};
  overflow-y: scroll;
  background: linear-gradient(
    to bottom,
    #fff 0%,
    #fff 18.5rem,
    ${colors.colorPrimary} 18.5rem,
    ${colors.colorPrimary} 100%
  );

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-self: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  .mobileLogo {
    width: 100%;
    max-width: 25rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    margin: 0 auto;
    background-color: ${colors.white};

    .gatsby-image-wrapper {
      display: block;
      max-width: 15rem;
      margin: 0 auto;

      @media (min-width: 768px) {
        max-width: 100%;
        margin: 0 auto;
      }
    }
  }
`

export default TopNavDrawer

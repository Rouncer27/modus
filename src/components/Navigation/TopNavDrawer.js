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

const TopNavDrawer = ({ isOpen }) => {
  const data = useStaticQuery(getData)
  const menuItems = data.mobileMenu.menuItems.nodes
  return (
    <NavDrawer className={`${isOpen ? "active" : ""}`}>
      <div className="wrapper">
        <div className="side-logo"></div>
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

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .side-logo {
    width: 10%;
    height: 100%;
    background-color: #fff;
  }
`

export default TopNavDrawer

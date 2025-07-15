import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BigWrapper, colors } from "../styles/helpers"
import MainLogo from "./Logos/MainLogo"
import TopNav from "./Navigation/TopNav"
import HeaderMenu from "./Navigation/HeaderNav/HeaderMenuMain"

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <div className="wrapper">
        <div className="site-logo">
          <h1>
            <Link to="/">
              <MainLogo />
              <span>{siteTitle}</span>
            </Link>
          </h1>
        </div>
        <div className="site-menu">
          <HeaderMenu />
        </div>
      </div>
      <TopNav />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  /* position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%; */
  background-color: #fff;
  z-index: 999999;

  .wrapper {
    ${BigWrapper};
    align-items: center;
    justify-content: center;
  }

  .site-logo {
    width: 25rem;
    margin: 0 auto 3rem;

    @media (min-width: 1200px) {
      width: 25rem;
      margin: 0 auto;
    }

    a {
      display: block;
      margin: auto;

      &:focus {
        outline: 0.4rem solid ${colors.colorPrimary};
        transition: outline-width 0.35s ease-in-out;
      }
    }

    h1 {
      width: 100%;
      margin: auto;

      span {
        position: absolute;
        left: -999%;
      }
    }
  }

  .site-menu {
    position: relative;
    display: none;
    background-color: #fff;
    width: calc(100% - 25rem);
    z-index: 999999999999999999;

    @media (min-width: 768px) {
      display: block;
      width: calc(100%);
    }

    @media (min-width: 1200px) {
      width: calc(100% - 25rem);
    }
  }
`

export default Header

import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BigWrapper, colors } from "../styles/helpers"
import MainLogo from "./Logos/MainLogo"
import TopNav from "./Navigation/TopNav"

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
      </div>
      <TopNav />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 999999;

  .wrapper {
    ${BigWrapper};
    justify-content: flex-start;
  }

  .site-logo {
    width: 25rem;

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
`

export default Header

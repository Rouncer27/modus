import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import {
  B1Black,
  B2Black,
  B3Black,
  B3Blue,
  B4Black,
  colors,
} from "../../../styles/helpers"

import HeaderSubMenu from "./HeaderSubMenu"

const HeaderNavItem = ({ item }) => {
  let slug = item.url
    .split("/")
    .filter(item => item !== "")
    .filter(item => item !== "https:")
    .filter(item => item !== "http:")
    .filter(item => item !== process.env.GATSBY_WORDPRESS_URL)
    .join("/")
  const [subActive, setSubActive] = useState(false)

  if (item.target !== null) {
    slug = item.url
  }

  const handleIsActiveOn = () => {
    setSubActive(true)
  }

  const handleIsActiveOff = () => {
    setSubActive(false)
  }

  return (
    <HeaderNavItemStyled
      className={
        item.cssClasses.length > 0
          ? item.cssClasses.map(name => " " + name)
          : null
      }
    >
      {item.target === null ? (
        <Link
          to={`/${slug}`}
          onMouseEnter={handleIsActiveOn}
          onMouseLeave={handleIsActiveOff}
          onFocus={handleIsActiveOn}
        >
          {item.label}
        </Link>
      ) : (
        <a
          target="_blank"
          rel="noreferrer"
          title={`${item.label} - link opens in a new tab`}
          aria-label={`${item.label} - link opens in a new tab`}
          href={slug}
        >
          {item.label}
        </a>
      )}

      {item.subItems.length > 0 && (
        <>
          <span className="subIndicator">&#x25BC;</span>
          <HeaderSubMenu
            handleIsActiveOn={handleIsActiveOn}
            handleIsActiveOff={handleIsActiveOff}
            handleIsActiveOffBlur={handleIsActiveOff}
            subActive={subActive}
            items={item.subItems}
          />
        </>
      )}
    </HeaderNavItemStyled>
  )
}

const HeaderNavItemStyled = styled.li`
  padding: 0;
  margin: auto 0.5rem;
  position: relative;
  align-self: center;
  text-align: center;
  ${B4Black};

  a,
  button {
    ${B4Black};
    margin: 0 auto;
    padding: 1rem 2rem;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.35s ease-in-out;

    &:hover {
      background-color: ${colors.colorSecondary};
      color: #fff;
    }

    &[aria-current="page"] {
      background-color: ${colors.colorSecondary};
      color: #fff;

      &:hover {
        cursor: default;
        color: ${colors.colorPrimary};
      }
    }
  }

  .subIndicator {
    display: inline-block;
    color: ${colors.white};
    font-size: 1rem;
    padding-left: 0.5rem;
  }
`

export default HeaderNavItem

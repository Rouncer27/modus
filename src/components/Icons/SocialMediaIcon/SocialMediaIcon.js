import React from "react"
import styled from "styled-components"
import { colors } from "../../../styles/helpers"

import Linkedin from "../Linkedin"

const SocialMediaIcon = ({ data, type }) => {
  return (
    <StyledIcon className={`${type}`}>
      <a
        target="_blank"
        rel="noreferrer"
        title={`Follow us on ${type} - Link will open in new window`}
        href={data}
      >
        <i>
          {type === "Linkedin" ? <Linkedin /> : null}
          <span className="visuallyhidden">{type}</span>
        </i>
      </a>
    </StyledIcon>
  )
}

const StyledIcon = styled.li`
  display: inline-block;
  margin-right: 1rem;
  margin-left: 1rem;

  a {
    display: block;
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem;

    @media (min-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
    @media (min-width: 1025px) {
      width: 3.6rem;
      height: 3.6rem;
    }

    &:focus {
      outline: 0.4rem solid #003b49;
      transition: outline-width 0.35s ease-in-out;
    }

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    svg {
      display: block;
      width: 4rem;
      height: 4rem;
      margin: auto;
      transition: all 0.3s ease-out;
      fill: ${colors.white};

      @media (min-width: 768px) {
        width: 2rem;
        height: 2rem;
      }
      @media (min-width: 1025px) {
        width: 3.6rem;
        height: 3.6rem;
      }

      &:hover {
        fill: ${colors.colorPrimary};
      }
    }
  }

  &.Linkedin {
    a {
      background-color: #fff;

      svg {
        fill: #0077b5;
      }

      &:hover {
        background-color: #333;
        svg {
          fill: ${colors.colorPrimary};
        }
      }
    }
  }
`

export default SocialMediaIcon

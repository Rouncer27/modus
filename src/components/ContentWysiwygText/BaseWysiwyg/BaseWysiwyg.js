import React from "react"
import styled from "styled-components"
import {
  B1Black,
  B2Black,
  B3Black,
  H1Black,
  H2Black,
  H3Black,
  H4Black,
  colors,
} from "../../../styles/helpers"

const BaseWysiwyg = ({ data }) => {
  return <StyledSection dangerouslySetInnerHTML={{ __html: data }} />
}

const StyledSection = styled.section`
  width: 100%;

  margin-right: auto;
  margin-left: auto;

  p {
    ${B3Black};
  }

  a {
    ${B3Black};
    color: ${colors.colorSecondary};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: ${colors.colorPrimary};
    }
  }

  h1 {
    ${H1Black};
  }

  h2 {
    ${H2Black};
  }

  h3 {
    ${H3Black};
  }

  h4,
  h5,
  h6 {
    ${H4Black};
  }

  ul {
    margin-bottom: 2.5rem;
    margin-left: 2rem;

    li {
      ${B3Black};
      display: list-item;
      margin-bottom: 1rem;
      display: list-item;
      list-style-position: outside;
      list-style-type: disc;
    }
  }

  iframe {
    display: block;
    width: 100%;
    max-width: 100rem !important;
    margin: 0 auto;
    height: 24rem !important;
    min-height: 24rem !important;

    @media (min-width: 768px) {
      height: 55vw !important;
      min-height: 55vw !important;
    }

    @media (min-width: 900px) {
      height: 52vw !important;
      min-height: 52vw !important;
    }

    @media (min-width: 1025px) {
      height: 55.5rem !important;
      min-height: 55.5rem !important;
    }
  }
`

export default BaseWysiwyg

import * as primary from "./primary"
import { css } from "styled-components"

const PrimaryFonts = css`
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    src: local(""), url("${primary.WOFF2_4}") format("woff2");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: italic;
    font-weight: 400;
    src: local(""), url("${primary.WOFF2_4I}") format("woff2");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    src: local(""), url("${primary.WOFF2_6}") format("woff2");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: italic;
    font-weight: 600;
    src: local(""), url("${primary.WOFF2_6I}") format("woff2");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    src: local(""), url("${primary.WOFF2_7}") format("woff2");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: italic;
    font-weight: 700;
    src: local(""), url("${primary.WOFF2_7I}") format("woff2");
  }
`

export default PrimaryFonts

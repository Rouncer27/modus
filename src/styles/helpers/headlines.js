import { colors } from "./index"
import { fonts, fontSizer } from "./index"
import { css } from "styled-components"

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(3, 4.8, 76.8, 150, 3)};
  font-family: ${fonts.fontPrimary};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
`

export const H1Black = css`
  ${H1Base};
  color: ${colors.black};
`

export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`

// Headline Styles #2 //
export const H2Base = css`
  ${fontSizer(2.6, 3.5, 76.8, 150, 2.6)}
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: -0.21px;
`

export const H2White = css`
  ${H2Base};
  color: ${colors.white};
`

export const H2Black = css`
  ${H2Base};
  color: ${colors.black};
`

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(2.2, 2.7, 76.8, 150, 2)}
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
`

export const H3White = css`
  ${H3Base};
  color: ${colors.white};
`
export const H3Black = css`
  ${H3Base};
  color: ${colors.black};
`

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(2, 2.5, 76.8, 160, 2)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
`
export const H4White = css`
  ${H4Base};
  color: ${colors.white};
`
export const H4Black = css`
  ${H4Base};
  color: ${colors.black};
`

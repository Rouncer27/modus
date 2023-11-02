import { colors } from "./index"
import { fonts, fontSizer } from "./index"
import { css } from "styled-components"

// Body copy ONE //
export const B1Base = css`
  ${fontSizer(1.8, 2.3, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
`
export const B1Black = css`
  ${B1Base};
  color: ${colors.black};
`
export const B1White = css`
  ${B1Base};
  color: ${colors.white};
`

// Body copy TWO //
export const B2Base = css`
  ${fontSizer(1.6, 2, 76.8, 150, 1.6)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
`
export const B2Black = css`
  ${B2Base};
  color: ${colors.black};
`
export const B2White = css`
  ${B2Base};
  color: ${colors.white};
`

// Body copy THRESS //
export const B3Base = css`
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.4)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
`
export const B3Black = css`
  ${B3Base};
  color: ${colors.black};
`
export const B3White = css`
  ${B3Base};
  color: ${colors.white};
`

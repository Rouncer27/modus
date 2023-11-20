import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"
import fonts from "./fonts"

const BtnPrimaryBase = css`
  ${fontSizer(1.6, 2, 76.8, 150, 1.6)};
  display: inline-block;
  padding: 0.5rem 2.5rem;
  border: none;
  border-radius: 0;
  transition: all 0.3s ease;
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.2;
  letter-spacing: normal;
  text-align: center;
  text-transform: uppercase;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const BtnPrimaryGreen = css`
  ${BtnPrimaryBase};
  background-color: rgba(0, 88, 72, 0.6);
  color: ${colors.white};

  &:hover {
    background: ${colors.colorSecondary};
    color: ${colors.white};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    &:hover {
      background: ${colors.colorTertiary};
      color: ${colors.colorPrimary};
    }
  }
`

export const BtnPrimaryWhite = css`
  ${BtnPrimaryBase};
  background-color: rgba(255, 255, 255, 0.31);
  color: ${colors.black};

  &:hover {
    background: ${colors.colorSecondary};
    color: ${colors.white};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    &:hover {
      background: ${colors.colorTertiary};
      color: ${colors.colorPrimary};
    }
  }
`

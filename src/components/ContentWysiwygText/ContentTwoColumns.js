import React from "react"
import styled from "styled-components"
import {
  B1Black,
  H1Black,
  H2Black,
  H3Black,
  colors,
  medWrapper,
} from "../../styles/helpers"

const ContentTwoColumns = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="main-title">
          <h2>{data.mainTitle}</h2>
        </div>
        <div className="column-content">
          {!!data.leftSubTitle && (
            <div className="sub-title">
              <h3>{data.leftSubTitle}</h3>
            </div>
          )}
          <div
            className="blue-content"
            dangerouslySetInnerHTML={{ __html: data.leftBlueContent }}
          />
        </div>
        <div className="column-content">
          <div
            className="main-content"
            dangerouslySetInnerHTML={{ __html: data.rightContent }}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 9rem 0;
  .wrapper {
    ${medWrapper};
  }

  .main-title {
    position: relative;
    margin-bottom: 4rem;
    padding-bottom: 5rem;
    width: 100%;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 17.7rem;
      height: 0.9rem;
      background-color: ${colors.colorPrimary};
      content: "";
    }

    h2 {
      ${H1Black};
      margin: 0;
      text-transform: uppercase;
    }
  }

  .column-content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50% - 2rem);
    }

    .sub-title {
      h3 {
        ${H2Black};
        margin-top: 0;
        font-weight: normal;
      }
    }

    .blue-content {
      p {
        ${H3Black};
        font-weight: normal;
        color: ${colors.colorSecondary};
      }
    }

    .main-content {
      p {
        ${B1Black};
      }
    }

    &:first-of-type {
      @media (min-width: 768px) {
        margin-right: 2rem;
      }
    }

    &:last-of-type {
      @media (min-width: 768px) {
        margin-left: 2rem;
      }
    }
  }
`

export default ContentTwoColumns

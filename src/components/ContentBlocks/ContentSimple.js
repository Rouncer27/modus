import React from "react"
import styled from "styled-components"
import {
  B1Black,
  B2Black,
  B3Black,
  H1Black,
  H2Black,
  H3Black,
  standardWrapper,
} from "../../styles/helpers"

const ContentSimple = ({ data }) => {
  return (
    <StyledSection className={`content-style-${data.contentStyle}`}>
      <div className="wrapper">
        {!!data.mainTitle && (
          <div className="main-title">
            <h2>{data.mainTitle}</h2>
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: data.simpleContent }} />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 7.5rem;
  }

  .wrapper {
    ${standardWrapper};
  }

  .main-title {
    width: 100%;

    h2 {
      ${H2Black};
      text-transform: uppercase;
    }
  }

  &.content-style-h1 {
    p {
      ${H1Black};
    }
  }

  &.content-style-h2 {
    p {
      ${H2Black};
    }
  }

  &.content-style-h3 {
    p {
      ${H3Black};
    }
  }

  &.content-style-b1 {
    p {
      ${B1Black};
    }
  }

  &.content-style-b2 {
    p {
      ${B2Black};
    }
  }

  &.content-style-b3 {
    p {
      ${B3Black};
    }
  }
`

export default ContentSimple

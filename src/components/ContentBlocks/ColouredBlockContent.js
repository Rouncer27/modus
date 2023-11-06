import React from "react"
import styled from "styled-components"
import { H3White, colors, standardWrapper } from "../../styles/helpers"

const ColouredBlockContent = ({ data }) => {
  return (
    <StyledSection className={`background-color-${data.backgroundColour}`}>
      <div className="wrapper">
        <div className="main-content">
          <h2>{data.boldTitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background-color: ${colors.colorSecondary};
  margin-bottom: 1.5rem;

  &.background-color-sky {
    background-color: ${colors.colorPrimary};
  }

  .wrapper {
    ${standardWrapper};
    padding: 3.5rem 2rem;
  }

  .main-content {
    width: 100%;
    text-align: center;
  }

  h2 {
    ${H3White};
    margin: 0;
    margin-bottom: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    ${H3White};

    &:last-of-type {
      margin: 0;
    }
  }
`

export default ColouredBlockContent

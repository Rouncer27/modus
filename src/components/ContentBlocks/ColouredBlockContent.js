import React from "react"
import styled from "styled-components"
import { H3White, colors, standardWrapper } from "../../styles/helpers"

const ColouredBlockContent = ({ data }) => {
  const noContent = data.content ? "" : "no-para"
  return (
    <StyledSection
      className={`background-color-${data.backgroundColour} ${noContent}`}
    >
      <div className="wrapper">
        <div className="main-content">
          {!!data.boldTitle && <h2>{data.boldTitle}</h2>}
          {!!data.content && (
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          )}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background-color: ${colors.colorSecondary};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  &.background-color-sky {
    background-color: ${colors.colorPrimary};
  }

  &.background-color-black {
    background-color: #333;
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

  &.no-para {
    h2 {
      margin-bottom: 0rem;
    }
  }

  p {
    ${H3White};

    &:last-of-type {
      margin: 0;
    }
  }
`

export default ColouredBlockContent

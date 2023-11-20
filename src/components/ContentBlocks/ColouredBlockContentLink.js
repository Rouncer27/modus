import React from "react"
import styled from "styled-components"
import { H1White, H3White, colors, standardWrapper } from "../../styles/helpers"
import { Link } from "gatsby"

const ColouredBlockContentLink = ({ data }) => {
  return (
    <StyledSection className={`background-color-${data.backgroundColour}`}>
      <Link to={data.pageLink.uri}>
        <div className="wrapper">
          <div className="main-content">
            <h2>{data.boldTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
          <div className="main-arrow">
            <span>&#8594;</span>
          </div>
        </div>
      </Link>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background-color: ${colors.colorSecondary};

  &.background-color-sky {
    background-color: ${colors.colorPrimary};
  }

  &.background-color-black {
    background-color: #333333;
  }

  .wrapper {
    ${standardWrapper};
    align-items: center;
    padding: 7.5rem 2rem;
  }

  .main-content {
    width: 90%;
    text-align: left;
  }

  .main-arrow {
    width: 10%;

    span {
      ${H1White};
      color: ${colors.colorPrimary};
    }
  }

  h2 {
    ${H3White};
    margin: 0;
    margin-bottom: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  p {
    ${H3White};

    &:last-of-type {
      margin: 0;
    }
  }
`

export default ColouredBlockContentLink

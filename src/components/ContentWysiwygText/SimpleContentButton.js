import React from "react"
import styled from "styled-components"
import {
  B1Black,
  BtnPrimaryGreen,
  H2Black,
  standardWrapper,
} from "../../styles/helpers"
import { Link } from "gatsby"

const SimpleContentButton = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>{data.mainTitle}</h2>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.mainContent }}
        />
        {!!data.buttonRequired && (
          <div className="button-link">
            {data.buttonType === "email" ? (
              <a href={`mailto: ${data.emailLink}`}>{data.buttonText}</a>
            ) : data.buttonType === "external" ? (
              <a target="_blank" rel="noopener" href={`${data.linkUrl}`}>
                {data.buttonText}
              </a>
            ) : data.buttonType === "internal" ? (
              <Link to={data.pageLink.uri}>{data.buttonText}</Link>
            ) : null}
          </div>
        )}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  text-align: center;
  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;

    h2 {
      ${H2Black};
    }
  }

  .content {
    width: 100%;

    p {
      ${B1Black};
    }
  }

  .button-link {
    width: 100%;

    a {
      ${BtnPrimaryGreen};
    }
  }
`

export default SimpleContentButton

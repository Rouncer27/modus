import React from "react"
import styled from "styled-components"
import { B1Black, H2Black, standardWrapper } from "../../styles/helpers"

const ContentBoldTitles = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        {!!data.mainTitle || !!data.openingContent ? (
          <div className="main-sec">
            {!!data.mainTitle && (
              <div className="main-sec__title">
                <h2>{data.mainTitle}</h2>
              </div>
            )}
            {!!data.openingContent && (
              <div dangerouslySetInnerHTML={{ __html: data.openingContent }} />
            )}
          </div>
        ) : null}

        <div className="content-sec">
          {data.contentSections.map((sec, index) => {
            return (
              <div key={index}>
                <div>
                  <h3>{sec.boldTitle}</h3>
                </div>
                <div dangerouslySetInnerHTML={{ __html: sec.content }} />
              </div>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .main-sec {
    width: 100%;

    h2 {
      ${H2Black};
      text-transform: uppercase;
    }

    p {
      ${B1Black};
    }
  }

  .content-sec {
    width: 100%;

    h3 {
      ${B1Black};
      margin-bottom: 0;
      font-weight: bold;
    }

    p {
      ${B1Black};
    }
  }
`

export default ContentBoldTitles

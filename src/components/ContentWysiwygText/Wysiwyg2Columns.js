import React from "react"
import styled from "styled-components"
import BaseWysiwyg from "./BaseWysiwyg/BaseWysiwyg"
import { medWrapper } from "../../styles/helpers"

const Wysiwyg2Columns = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="col col-left">
          <BaseWysiwyg data={data.columnLeft} />
        </div>
        <div className="col col-right">
          <BaseWysiwyg data={data.columnRight} />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .col {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 4.5rem);
    }

    &-left {
      @media (min-width: 768px) {
        margin-right: 4.5rem;
      }
    }

    &-right {
      @media (min-width: 768px) {
        margin-left: 4.5rem;
      }
    }
  }
`

export default Wysiwyg2Columns

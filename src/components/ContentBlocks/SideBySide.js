import React from "react"
import styled from "styled-components"
import { H3White, colors, medWrapper } from "../../styles/helpers"

const SideBySide = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className={`left-side bgcolor-${data.leftSide.leftSideColour}`}>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.leftSide.leftSideContent }}
          />
        </div>
        <div className={`right-side bgcolor-${data.rightSide.rightSideColour}`}>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: data.rightSide.rightSideContent,
            }}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 1rem;
  background: linear-gradient(
    to right,
    ${colors.colorPrimary} 0%,
    ${colors.colorPrimary} 33%,
    ${colors.white} 33%,
    ${colors.white} 50%,
    #333333 50%,
    #333333 100%
  );

  .wrapper {
    ${medWrapper};
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .left-side {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5rem 0;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(45% - 0.5rem);
      margin-right: 0.5rem;
      padding: 0;
    }

    @media (min-width: 815px) {
      width: calc(40% - 0.5rem);
      margin-right: 0.5rem;
    }

    @media (min-width: 1025px) {
      width: calc(33.333333% - 0.5rem);
      margin-right: 0.5rem;
    }

    .content {
      @media (min-width: 768px) {
        padding: 5rem 2rem;
      }

      @media (min-width: 1025px) {
        padding: 5rem 2rem 5rem 2rem;
      }

      @media (min-width: 1200px) {
        padding: 5rem 4rem 5rem 2rem;
      }
    }
  }

  .right-side {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(55% - 0.5rem);
      margin-left: 0.5rem;
    }

    @media (min-width: 815px) {
      width: calc(60% - 0.5rem);
      margin-left: 0.5rem;
    }

    @media (min-width: 1025px) {
      width: calc(66.666666% - 0.5rem);
    }

    .content {
      padding: 5rem 2rem;

      @media (min-width: 1025px) {
        padding: 5rem 1rem 5rem 2rem;
      }

      @media (min-width: 1200px) {
        padding: 5rem 1rem 5rem 4rem;
      }
    }
  }

  .content {
    p {
      ${H3White};

      &:last-of-type {
        margin: 0;
      }
    }
  }

  .bgcolor-blue {
    background-color: ${colors.colorPrimary};
  }

  .bgcolor-black {
    background-color: #333333;
  }
`

export default SideBySide

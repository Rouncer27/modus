import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { B1Black, H2Black, medWrapper } from "../../styles/helpers"

const getData = graphql`
  {
    testimonials: allWpTestimonial(
      limit: 3
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        title
        testimonialsComponents {
          testimonial
          name
          company
        }
      }
    }
  }
`

const DisplayTestimonials = ({ data }) => {
  const testimonialsData = useStaticQuery(getData)
  const testimonials = testimonialsData?.testimonials?.nodes
    ? testimonialsData?.testimonials?.nodes
    : []

  if (!data.display) return null

  return (
    <StyledSection>
      <div className="wrapper">
        <div className="main-title">
          <h2>{data.sectionTitle}</h2>
        </div>
        <div className="testimonials">
          {testimonials.map((test, index) => {
            return (
              <SingleTest key={index}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: test.testimonialsComponents.testimonial,
                  }}
                />
                <div>
                  <p>
                    <span>{test.testimonialsComponents.name}</span>,{" "}
                    <span>{test.testimonialsComponents.company}</span>
                  </p>
                </div>
              </SingleTest>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .main-title {
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    text-align: center;

    h2 {
      ${H2Black};
      text-transform: uppercase;
    }
  }

  .testimonials {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }
`

const SingleTest = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: calc(33.333333%);
    padding: 0 3rem;
  }

  p {
    ${B1Black};
  }
`

export default DisplayTestimonials

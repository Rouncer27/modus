import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1White, B2Black, H2Black, medWrapper } from "../../styles/helpers"

const getData = graphql`
  {
    team: allWpTeamMember(sort: { order: DESC, fields: date }) {
      nodes {
        teamComponents {
          title
          bio
          headShot {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1500)
              }
            }
          }
        }
        title
      }
    }
  }
`

const DisplayTeamMembers = ({ data }) => {
  const teamData = useStaticQuery(getData)
  const team = teamData?.team?.nodes ? teamData?.team?.nodes : []

  if (!data.display) return null
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="main-title">
          <h2>{data.teamTitle}</h2>
        </div>
        <div className="members">
          {team.map((member, index) => {
            const imageDisplay = getImage(
              member.teamComponents.headShot.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = member.teamComponents.headShot.altText
            return (
              <SingleTeam key={index}>
                <div className="team-image">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                  <div className="team-content">
                    <p>
                      <span>{member.title}</span>
                      <span>{member.teamComponents.title}</span>
                    </p>
                  </div>
                </div>

                <div className="team-bio">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: member.teamComponents.bio,
                    }}
                  />
                </div>
              </SingleTeam>
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
      text-transform: uppercase !important;
    }
  }

  .members {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }
`

const SingleTeam = styled.div`
  width: calc(100% - 2rem);
  margin: 1rem;
  position: relative;
  text-align: center;

  @media (min-width: 768px) {
    width: calc(50% - 2rem);
    margin: 1rem;
  }

  @media (min-width: 1025px) {
    width: calc(33.333333% - 2rem);
    margin: 1rem;
  }

  .team-image {
    position: relative;

    .team-content {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 1rem 2rem;
      background-color: rgba(0, 88, 72, 0.84);

      p {
        ${B1White};
        margin: 0;
        padding: 0;

        span {
          display: block;
        }
      }
    }
  }

  .team-bio {
    width: 100%;
    margin-top: 2.5rem;

    p {
      ${B2Black};
    }
  }
`

export default DisplayTeamMembers

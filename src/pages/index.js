import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import BlockRenderer from "../Renderers/BlockRenderer/BlockRenderer"

const IndexPage = props => {
  const pageComponentsBlocks =
    props?.data?.pageComponents?.pageComponents?.pageComponentsBlocks

  return (
    <Layout>
      <BlockRenderer blocks={pageComponentsBlocks} />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export const homeQuery = graphql`
  {
    pageComponents: wpPage(slug: { eq: "home" }) {
      pageComponents {
        fieldGroupName
        pageComponentsBlocks {
          ##
          ##
          # NOTE: This is the query for all the Hero Blocks types. #
          ##
          ##
          ... on WpPage_Pagecomponents_PageComponentsBlocks_HeroBlocks {
            fieldGroupName
            herosSections {
              ... on WpPage_Pagecomponents_PageComponentsBlocks_HeroBlocks_HerosSections_HeroOne {
                fieldGroupName
                heroContent {
                  content
                  fieldGroupName
                  title
                }
                heroImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 3000)
                    }
                  }
                }
              }
            }
          }

          ##
          ##
          # NOTE: This is the query for all the Content Blokcs types. #
          ##
          ##

          ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks {
            fieldGroupName
            contentBlocksSections {
              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_SideBySide {
                fieldGroupName
                leftSide {
                  leftSideColour
                  leftSideContent
                }
                rightSide {
                  rightSideColour
                  rightSideContent
                }
              }

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ImageByContent {
                fieldGroupName
                leftContent {
                  fieldGroupName
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 2000)
                      }
                    }
                  }
                }
                rightContent {
                  content
                  fieldGroupName
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage

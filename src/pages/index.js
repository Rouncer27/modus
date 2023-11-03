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
              ##
              ##
              ## HeroOne
              ##
              ##

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
              ##
              ##
              ## SideBySide
              ##
              ##

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

              ##
              ##
              ## ImageByContent
              ##
              ##

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

              ##
              ##
              ## BoxImageLinks
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_BoxImageLinks {
                fieldGroupName
                boxLinks {
                  fieldGroupName
                  pageLink {
                    ... on WpPage {
                      id
                      slug
                      uri
                    }
                  }
                  title
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 2000)
                      }
                    }
                  }
                }
              }

              ##
              ##
              ## ContentWithMiddleImage
              ##
              ##

              ... on WpPage_Pagecomponents_PageComponentsBlocks_ContentBlocks_ContentBlocksSections_ContentWithMiddleImage {
                fieldGroupName
                centerImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 2000)
                    }
                  }
                }
                leftContent {
                  boxColour
                  content
                  fieldGroupName
                }
                rightContent {
                  boldContent
                  boxColour
                  content
                  button {
                    buttonRequired
                    buttonText
                    fieldGroupName
                    pageLink {
                      ... on WpPage {
                        id
                        slug
                        uri
                      }
                      ... on WpPost {
                        id
                        slug
                        uri
                      }
                    }
                  }
                }
              }
            }
          }

          ##
          ##
          # NOTE: This is the query for all the Slider Blokcs types. #
          ##
          ##

          ... on WpPage_Pagecomponents_PageComponentsBlocks_SliderBlocks {
            fieldGroupName
            sliderBlocksSections {
              ##
              ##
              ## SliderOne
              ##
              ##
              ... on WpPage_Pagecomponents_PageComponentsBlocks_SliderBlocks_SliderBlocksSections_SliderOne {
                fieldGroupName
                slides {
                  topTitle
                  smallContent
                  bigTitle
                  fieldGroupName
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 2500)
                      }
                    }
                  }
                }
              }
            }
          }

          ##
          ##
          # NOTE: This is the query for all the Display Content Blokcs types. #
          ##
          ##

          ... on WpPage_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks {
            fieldGroupName
            displayContentBlocksSections {
              ##
              ##
              ## DisplayNewsPosts
              ##
              ##
              ... on WpPage_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayNewsPosts {
                displayNewsPosts
                fieldGroupName
                title
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage

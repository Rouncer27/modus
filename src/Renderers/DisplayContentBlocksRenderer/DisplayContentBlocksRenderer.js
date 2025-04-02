import React from "react"

import DisplayNewsPosts from "../../components/DisplayContentBlocks/DisplayNewsPosts"
import DisplayTestimonials from "../../components/DisplayContentBlocks/DisplayTestimonials"
import DisplayTeamMembers from "../../components/DisplayContentBlocks/DisplayTeamMembers"
import DisplayContactForm from "../../components/DisplayContentBlocks/DisplayContactForm"
import DisplaySalesForce from "../../components/DisplayContentBlocks/DisplaySalesForce"
import DisplayAllNewsPostsRows from "../../components/DisplayContentBlocks/DisplayAllNewsPostsRows"

const DisplayContentBlocksRenderer = ({ displayContentBlocks }) => {
  // console.log("DisplayContentBlocksRenderer: ", displayContentBlocks)
  const displayContent =
    displayContentBlocks?.length > 0 ? (
      <>
        {displayContentBlocks.map((block, index) => {
          switch (block.fieldGroupName) {
            case "Page_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayNewsPosts":
              return <DisplayNewsPosts key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayAllNewsPostsRows":
              return <DisplayAllNewsPostsRows key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayTestimonials":
              return <DisplayTestimonials key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayTeamMembers":
              return <DisplayTeamMembers key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayContactForm":
              return <DisplayContactForm key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplaySalesForce":
              return <DisplaySalesForce key={index} data={block} />
            default:
              return <p>Cannot find this component {block.fieldGroupName}</p>
          }
        })}
      </>
    ) : (
      <p>This Display Content Blocks has no content</p>
    )

  return displayContent
}

export default DisplayContentBlocksRenderer

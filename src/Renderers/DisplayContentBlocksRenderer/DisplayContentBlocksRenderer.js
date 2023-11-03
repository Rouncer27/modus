import React from "react"

import DisplayNewsPosts from "../../components/DisplayContentBlocks/DisplayNewsPosts"

const DisplayContentBlocksRenderer = ({ displayContentBlocks }) => {
  console.log("DisplayContentBlocksRenderer: ", displayContentBlocks)
  const displayContent =
    displayContentBlocks?.length > 0 ? (
      <>
        {displayContentBlocks.map((block, index) => {
          switch (block.fieldGroupName) {
            case "Page_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks_DisplayContentBlocksSections_DisplayNewsPosts":
              return <DisplayNewsPosts key={index} data={block} />
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

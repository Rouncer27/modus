import React from "react"

import HeroBlockRenderer from "../HeroBlockRenderer/HeroBlockRenderer"
import ContentBlocksRenderer from "../ContentBlocksRenderer/ContentBlocksRenderer"

const BlockRenderer = ({ blocks }) => {
  const allPageComponents =
    blocks?.length > 0 ? (
      <>
        {blocks.map((block, index) => {
          console.log("block", block)
          switch (block.fieldGroupName) {
            case "Page_Pagecomponents_PageComponentsBlocks_HeroBlocks":
              return (
                <HeroBlockRenderer
                  key={index}
                  heroBlock={block.herosSections}
                />
              )
            case "Page_Pagecomponents_PageComponentsBlocks_ContentBlocks":
              return (
                <ContentBlocksRenderer
                  key={index}
                  contentBlock={block.contentBlocksSections}
                />
              )
            default:
              return <p>Cannot find this component {block.fieldGroupName}</p>
          }
        })}
      </>
    ) : (
      <p>This page has no content</p>
    )

  return allPageComponents
}

export default BlockRenderer

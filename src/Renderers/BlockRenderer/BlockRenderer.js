import React from "react"

import HeroBlockRenderer from "../HeroBlockRenderer/HeroBlockRenderer"
import ContentBlocksRenderer from "../ContentBlocksRenderer/ContentBlocksRenderer"
import SliderBlocksRenderer from "../SliderBlocksRenderer/SliderBlocksRenderer"
import DisplayContentBlocksRenderer from "../DisplayContentBlocksRenderer/DisplayContentBlocksRenderer"

const BlockRenderer = ({ blocks }) => {
  // console.log("BlockRenderer: ", blocks)
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

            case "Page_Pagecomponents_PageComponentsBlocks_SliderBlocks":
              return (
                <SliderBlocksRenderer
                  key={index}
                  sliderBlock={block.sliderBlocksSections}
                />
              )

            case "Page_Pagecomponents_PageComponentsBlocks_DisplayContentBlocks":
              return (
                <DisplayContentBlocksRenderer
                  key={index}
                  displayContentBlocks={block.displayContentBlocksSections}
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

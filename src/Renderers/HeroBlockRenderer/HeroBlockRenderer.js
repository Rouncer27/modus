import React from "react"

import HeroOne from "../../components/HeroBlocks/HeroOne"
import HeroTwo from "../../components/HeroBlocks/HeroTwo"

const HeroBlockRenderer = ({ heroBlock }) => {
  console.log("HeroBlockRenderer: ", heroBlock)
  const heroCompnent =
    heroBlock?.length > 0 ? (
      <>
        {heroBlock.map((block, index) => {
          switch (block.fieldGroupName) {
            case "Page_Pagecomponents_PageComponentsBlocks_HeroBlocks_HerosSections_HeroOne":
              return <HeroOne key={index} data={block} />
            case "Page_Pagecomponents_PageComponentsBlocks_HeroBlocks_HerosSections_HeroTwo":
              return <HeroTwo key={index} data={block} />
            default:
              return <p>Cannot find this component {block.fieldGroupName}</p>
          }
        })}
      </>
    ) : (
      <p>This Hero Blocks has no content</p>
    )

  return heroCompnent
}

export default HeroBlockRenderer

import React from "react"

import SliderOne from "../../components/SliderBlocks/SliderOne"

const SliderBlocksRenderer = ({ sliderBlock }) => {
  console.log("SliderBlocksRenderer: ", sliderBlock)
  const sliderCompnent =
    sliderBlock?.length > 0 ? (
      <>
        {sliderBlock.map((block, index) => {
          switch (block.fieldGroupName) {
            case "Page_Pagecomponents_PageComponentsBlocks_SliderBlocks_SliderBlocksSections_SliderOne":
              return <SliderOne key={index} data={block} />
            default:
              return <p>Cannot find this component {block.fieldGroupName}</p>
          }
        })}
      </>
    ) : (
      <p>This Slider Blocks has no content</p>
    )

  return sliderCompnent
}

export default SliderBlocksRenderer

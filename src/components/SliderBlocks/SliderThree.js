import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderThree = ({ data }) => {
  const slidesToShow = data.slides.length <= 3 ? data.slides.length - 1 : 3
  const settings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    fade: false,
    draggable: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 15000,
    centerPadding: "0px",
    centerMode: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <StyledSection>
      <div className="wrapper">
        <Slider className="slider" {...settings}>
          {data.slides.map((slide, index) => {
            const imageDisplay = getImage(
              slide.slide.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = slide.slide.altText
            return (
              <StyledSlide key={index}>
                <div className="image">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
              </StyledSlide>
            )
          })}
        </Slider>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 1rem;

  .slider {
    position: relative;

    .slick-list {
      margin: 0 -5px;
    }
    .slick-slide > div {
      padding: 0 5px;
      height: 100% !important;
    }
  }
`

const StyledSlide = styled.div`
  position: relative;
  min-height: 45rem;

  @media (min-width: 768px) {
    min-height: auto;
    height: 100% !important;
  }

  .image {
    position: relative;
    min-height: 50rem;
    height: 100% !important;

    @media (max-width: 767px) {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100% !important;
    }
  }
`

export default SliderThree

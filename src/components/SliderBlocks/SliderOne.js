import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { B1White, H2White, colors } from "../../styles/helpers"

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "0px",
  centerMode: true,
  arrows: false,
  dots: true,
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
      },
    },
  ],
}

const SliderOne = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <Slider className="slider" {...settings}>
          {data.slides.map((slide, index) => {
            const imageDisplay = getImage(
              slide.image.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = slide.image.altText
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
                <div className="content">
                  <div className="content__inner">
                    <h2>{slide.topTitle}</h2>
                    <h3>{slide.bigTitle}</h3>
                    <p>{slide.smallContent}</p>
                  </div>
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
  .slider {
    position: relative;
  }

  .slick-dots {
    display: inline-block !important;
    position: absolute;
    left: 5%;
    bottom: 30%;
    width: auto !important;
    z-index: 10;

    @media (min-width: 768px) {
      bottom: 22.5%;
      left: 4rem;
    }

    @media (min-width: 1025px) {
      bottom: 22.5%;
      left: 4rem;
    }

    @media (min-width: 1100px) {
      bottom: 25%;
      left: 4rem;
    }

    @media (min-width: 1100px) {
      bottom: 30%;
      left: 4rem;
    }

    @media (min-width: 1300px) {
      left: 7.5%;
    }

    @media (min-width: 1425px) {
      left: 15%;
      bottom: 35%;
    }

    li {
      width: 2rem;
      height: 2rem;
      margin: 0;

      button {
        width: 2rem;
        height: 2rem;
        padding: 0;

        &::before {
          font-size: 1.2rem;
          color: ${colors.colorPrimary};
          opacity: 1;
        }
      }

      &.slick-active {
        button {
          &::before {
            color: ${colors.white};
            opacity: 1;
          }
        }
      }
    }
  }
`

const StyledSlide = styled.div`
  position: relative;
  min-height: 45rem;

  @media (min-width: 768px) {
    min-height: auto;
  }

  .image {
    @media (max-width: 767px) {
      position: absolute;
      top: 0;
      left: 0;
      width: 101%;
      height: 100%;

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .content {
    position: absolute;
    left: 0;
    top: 0%;
    bottom: 0%;
    width: 100%;
    padding: 2rem 4rem 5rem;
    background: rgba(0, 0, 0, 0.75);

    @media (min-width: 768px) {
      top: 50%;
      bottom: auto;
      width: 60%;
      transform: translateY(-50%);
    }

    &__inner {
      width: 100%;
      max-width: 70rem;
      margin-left: auto;
      margin-right: 0;

      h2 {
        ${B1White};
        margin: 0;
        margin-bottom: 1rem;
      }

      h3 {
        ${H2White};
        margin: 0;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }

      p {
        ${B1White};
        margin: 0;
        margin-bottom: 1rem;
      }
    }
  }
`

export default SliderOne

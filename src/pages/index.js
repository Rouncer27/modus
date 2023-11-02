import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import styled from "styled-components"
import {
  B1Black,
  B2Black,
  B3Black,
  BtnPrimaryGreen,
  H1Black,
  H2Black,
  H3Black,
  medWrapper,
} from "../styles/helpers"

const IndexPage = () => {
  return (
    <Layout>
      <Typography>
        <div className="wrapper">
          <h1>Aliquam tincidunt mauris eu risus.</h1>
          <h2>Vestibulum auctor dapibus neque.</h2>
          <h3>Vivamus vestibulum ntulla nec ante.</h3>
          <p className="p1">
            orem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </p>
          <p className="p2">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
            volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
            fermentum et, dapibus sed, urna.
          </p>
          <p className="p3">
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
            a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
            libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
            varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
            Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget,
            gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
            lacinia eu, vulputate vel, nisl.
          </p>

          <div className="buttons">
            <a href="#">Learn More</a>
            <button>Learn More</button>
            <button disabled>Learn More</button>
          </div>
        </div>
      </Typography>
    </Layout>
  )
}

const Typography = styled.div`
  .wrapper {
    ${medWrapper};
  }

  h1 {
    width: 100%;
    ${H1Black};
  }

  h2 {
    width: 100%;
    ${H2Black};
  }

  h3 {
    width: 100%;
    ${H3Black};
  }

  .p1 {
    width: 100%;
    ${B1Black};
  }

  .p2 {
    width: 100%;
    ${B2Black};
  }

  .p3 {
    width: 100%;
    ${B3Black};
  }

  .buttons {
    width: 100%;

    a,
    button {
      ${BtnPrimaryGreen};
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage

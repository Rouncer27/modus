import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { B1White, B3White, BigWrapper, colors } from "../styles/helpers"

const getData = graphql`
  {
    footerMenu: wpMenu(name: { eq: "Footer Menu" }) {
      name
      menuItems {
        nodes {
          label
          url
          parentDatabaseId
          parentId
          id
          databaseId
        }
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(getData)
  const { footerMenu } = data

  console.log("footerMenu", footerMenu)

  return (
    <StyledFooter>
      <footer>
        <div className="wrapper">
          <div className="footer-top">
            <div className="footer-logo"></div>
            <div className="foot-nav-links">
              <nav>
                <ul>
                  {footerMenu.menuItems.nodes.map(item => {
                    const slug = item.url
                      .split("/")
                      .filter(item => item !== "")
                      .join("/")
                    return (
                      <li key={item.id}>
                        <Link to={`/${slug}`}>{item.label}</Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>

            <div className="footer-social"></div>
          </div>

          <div className="footer-copy">
            <p>
              © {new Date().getFullYear()} &middot; Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </p>
          </div>
        </div>
      </footer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 4rem 0 2rem;
  background-color: #333333;

  .wrapper {
    ${BigWrapper};
  }

  .footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 5rem;

    .footer-logo {
      width: 15%;
    }

    .foot-nav-links {
      width: 65%;
      nav {
        width: 100%;

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;

          li {
            ${B3White};
            width: calc(100% / 4);
            margin-bottom: 0.5rem;
            text-align: left;

            a {
              ${B3White};
              text-transform: uppercase;

              &:hover {
                color: ${colors.colorPrimary};
              }
            }
          }
        }
      }
    }

    .footer-social {
      width: 20%;
    }
  }

  .footer-copy {
    width: 100%;
    text-align: center;

    p {
      ${B3White};
      width: 100%;

      &:last-of-type {
        margin: 0;
      }
    }

    a {
      ${B3White};
    }
  }
`

export default Footer

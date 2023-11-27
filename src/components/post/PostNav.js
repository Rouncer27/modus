import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { B1Green, B2Black, Btn1One, medWrapper } from "../../styles/helpers"

const PostNav = ({ data }) => {
  return (
    <PostNavStyled>
      <div className="wrapper">
        <nav>
          {data.prev ? (
            <Link to={`/projects-news/${data.prev}`}>
              <span>&lt; </span>
              Previous Project
            </Link>
          ) : (
            <button disabled type="button">
              {" "}
              <span>&lt; </span>
              Previous Project
            </button>
          )}

          <Link className="btn-back" to="/projects-news">
            Projects & News
          </Link>
          {data.next ? (
            <Link to={`/projects-news/${data.next}`}>
              Next Project
              <span>&gt; </span>
            </Link>
          ) : (
            <button disabled type="button">
              {" "}
              Next Project
              <span>&gt; </span>
            </button>
          )}
        </nav>
      </div>
    </PostNavStyled>
  )
}

const PostNavStyled = styled.div`
  width: 100%;
  padding-top: 0;

  .wrapper {
    ${medWrapper};
    max-width: 95rem !important;
    margin-top: 5rem;
    padding-top: 1rem;
    border-top: 0.1rem solid #333;
  }

  nav {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;

    a,
    button {
      ${B2Black};
      border: none;
      background: none;
      text-transform: uppercase;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    a.btn-back {
      ${B2Black};
    }
  }
`

export default PostNav

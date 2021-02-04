import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
// https://flatuicolors.com/palette/gb
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="layout-main"
      css={css`
      display: flex;
      flex-direction: column;
      `}
    > 
    <div id='header'
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        background: #e84118;
        align-items: center;
      }`}
    >
    <div>HERE Logo</div> 
      <Link to={`/`}>
          {data.site.siteMetadata.title}
      </Link>
      <Link
        to={`/about/`}
        css={css``}
      > About
      </Link>
      </div>
      <div id='body'       
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}>{children}</div>
      <div id='footer'
       css={css`
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        background: #7f8fa6;
        align-items: center;
      }`}>Footer</div>
    </div>
  )
}
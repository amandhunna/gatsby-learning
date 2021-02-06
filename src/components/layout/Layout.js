import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/Header";
import './layout.css';

const Layout = ({ children }) => {
/*   const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
 */
  return (
    <>
      <Header siteTitle={ `Title`} /> {/* data.site.siteMetadata?.title || */}
      <div>
        <main>{children}</main>
        <footer> © {new Date().getFullYear()}, {` `} SAP-FICO
        </footer>
      </div>
    </>
  )
}

export default Layout;

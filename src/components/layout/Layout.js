import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from "../header/Header";
import './layout.css';

const Layout = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

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


const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#FFFFFF"
    }
  },

  typography: {
    useNextVariants: true,
    fontFamily: "Montserrat",
    h3: {
      fontSize: 33,
      fontFamily: "Montserrat",
      fontWeight: 300,
      color: "#2882F8",
      letterSpacing: "0.0075em",
      verticalAlign: "middle",
      alignItems: "center",
      textAlign: "center"
    }
  }
});

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={ `Title`} /> {/* data.site.siteMetadata?.title || */}
      <div>
        <main>{children}</main>
        <footer> © {new Date().getFullYear()}, {` `} SAP-FICO
        </footer>
      </div>
      </ThemeProvider>
  )
}

export default Layout;

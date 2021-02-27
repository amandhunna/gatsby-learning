import React, { useState } from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ThemeContext from './../../components/context';


import Header from "../header/Header";
import './layout.css';

const Layout = ({ children }) => {
  const lsTheme = localStorage.getItem('themeType')  || 'default';
  const [themeType, setThemeType] = useState(lsTheme);
  const isDarkState = lsTheme === "dark";

  const palletType = isDarkState ? "dark" : "light";

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      // text: {
      //   primary: "#FFFFFF"
      // },
      primary: {
        contrastText: "#fff",
        dark: "#000000a0",
        light: "yellow",
        main: isDarkState? '#000000a0': "#afafaf",
      }
    }
  });




const contextValues = { themeType, setThemeType, isDarkState }

  return (
    <ThemeContext.Provider value={contextValues} >
      <ThemeProvider theme={theme}>
          <Header siteTitle={`Title`} /> {/* data.site.siteMetadata?.title || */}
          <div>
            <main>{children}</main>
            <footer> © {new Date().getFullYear()}, {` `} SAP-FICO
            </footer>
          </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Layout;

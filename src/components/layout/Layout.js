import React, { useState } from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ThemeContext from './../../components/context';


import Header from "../header/Header";
import './layout.css';

const Layout = ({ children }) => {
  const [themeType, setThemeType] = useState('default');
  const [darkState, setDarkState] = useState(false);

  const palletType = darkState ? "dark" : "light";

  const themeLight = createMuiTheme({
    palette: {
      type: palletType,
      // text: {
      //   primary: "#FFFFFF"
      // },
      primary: {
        contrastText: "#fff",
        dark: "#000000a0",
        light: "yellow",
        main: darkState? '#000000a0': "#afafaf",
      }
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

const theme = themeLight

const contextValues = { themeType, setThemeType, darkState, setDarkState }

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

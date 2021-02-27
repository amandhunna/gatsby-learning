import React, { useState } from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeContext from './../../components/context';


import Header from "../header/Header";
import Footer from '../footer/Footer';
import './layout.css';

const Layout = ({ children }) => {
  const lsTheme = localStorage.getItem('themeType')  || 'default';
  const [themeType, setThemeType] = useState(lsTheme);
  const isDarkState = lsTheme === "dark";

  const palletType = isDarkState ? "dark" : "light";
// #16a085, #27ae60, #2980b9, #8e44ad, #8e44ad, #2c3e50, https://flatuicolors.com/palette/defo (2nd row)
  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        contrastText: "#fff",
        dark: "#fff",
        light: "#f1c40f",
        main: isDarkState? '#000000a0': "#8e44ad",
      },
      background: {
        default: isDarkState? '#018786': "#27ae60",
      },
    }
  });

console.log("thme", theme);

const contextValues = { themeType, setThemeType, isDarkState }

  return (
    <ThemeContext.Provider value={contextValues} >
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={`Title`} /> {/* data.site.siteMetadata?.title || */}
      <main>{children}</main>
      <Footer />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Layout;

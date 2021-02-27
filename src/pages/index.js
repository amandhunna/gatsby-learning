import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import "@fontsource/akaya-telivigala"

import Layout from "../components/layout/Layout";
import SEO from "../components/seo";


const useStyles = makeStyles(theme => {
  console.log('---',theme.palette)
  return {
    introGrid: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '3rem 0 0 16rem',
      
    },
    hi:{
      fontSize: '2rem',
      fontFamily: "Akaya Telivigala",
    },
    im: {
      marginRight: '2rem',
      fontSize: '2rem',
      fontFamily: "Akaya Telivigala",
      color: `${theme.palette.primary}`,
    },
    h1: {
      display: 'flex',
      alignItems: 'baseline',
      fontFamily: "Akaya Telivigala",
    },
    h2: {
      fontSize: '2rem',
      fontFamily: "Akaya Telivigala",
    }
}});

const IndexPage = () => {
  const classes = useStyles();

  return (
  <Layout>
    <SEO title="Home" />
    <Grid container>
    <Grid item xs={12} className={classes.introGrid}>
        <Typography className={classes.hi}>Hello World!</Typography>
        <div className={classes.h1}>
          <Typography className={classes.im}>I'm</Typography>
          <Typography variant='h1'>Amanjot Singh.</Typography>
        </div>
        <Typography variant='h2'  className={classes.h2}>I'm a full-Stack developer focused on crafting stable, clean & user-friendly experiences.</Typography>
    </Grid>
    </Grid>
  </Layout>
)
}
export default IndexPage

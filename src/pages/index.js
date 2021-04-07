import React , {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "@fontsource/akaya-telivigala"

import Layout from "../components/layout/Layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby"

const GetRecentBlogs = (props) => {
  const { classes } = props;
  const blog = [
    {  
    repoURL:
    "https://amanjotsinghdhunna.medium.com/dynamically-add-suggestion-list-to-input-fields-b0a6e33c7e29",
    workTitle: "Dynamically add suggestion list to input fields",
    },
    {
      repoURL:
        "https://amanjotsinghdhunna.medium.com/cross-origin-communication-between-window-55369facd73",
      workTitle: "Cross-origin communication between window",
    },
    {
      repoURL:
        "https://amanjotsinghdhunna.medium.com/overwriting-and-appending-children-props-using-reactclone-4c69f88dc235",
      workTitle:
        "Overwriting and Appending children props using React.cloneElement",
    },
    {
      repoURL:
        "https://amanjotsinghdhunna.medium.com/add-console-to-the-code-fbef21e2024d",
      workTitle: "Add Console to the code",
    },
    {
      repoURL:
        "https://amanjotsinghdhunna.medium.com/string-operations-using-slice-substring-and-substr-c4364265d0a5",
      workTitle: "String operations using slice, substring and substr",
    },
    {
      repoURL: "https://amanjotsinghdhunna.medium.com/communication-76651c3019a4",
      workTitle: "Communication",
    },
  ];
  return blog.map((ele) => {
    return (
      <Grid item xs={12} md={4}
        key={"myblog" + Math.random()}
        className={classes.card}
        onClick={() => window.open(ele.repoURL)}
      >
        {ele.workTitle}
      </Grid>
    );
  });
};

const useStyles = makeStyles(theme => {
  const center = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  };
  return {
    introGrid: {
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '3rem'
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
    },
    card: {
      ...center,
      fontFamily: "Akaya Telivigala",
      cursor: 'pointer',
      background: '#2c3a47',
      color: 'white',
      borderRadius: '10px',
      boxShadow: '0 0 25px #807fb6',
      transform: 'scale(0.9)',
      fontSize: '2rem',
      padding: '2rem',
      '&:hover' :{
        transform: 'scale(1.2)',
        zIndex: 1
      }
    },
    paperBlog: {
      padding: '2rem',
      margin: '4rem 1rem',
    },
    blogs: {
      ...center
    },
    wrapper: {
      //display: grid;
      //gridTemplate-columns: repeat(3, 1fr);
      //gridGap: 10px;
      //gridAutoRows: minmax(100px, auto);
    }


}});

const IndexPage = () => {
  const classes = useStyles();
  const instagramPost = useStaticQuery(
    graphql`
    query {
      allInstaNode {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            caption
            hashtags
            localFile {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            },
            permalink,
            carouselImages {
              preview,
              localFile {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            },
            # Only available with the public api scraper
            thumbnails {
              src
              config_width
              config_height
            }
            dimensions {
              height
              width
            }
          }
        }
      }
    }}`);

    useEffect(() => {
      console.log(instagramPost)
    }, [])



  return (
  <Layout>
    <SEO title="Home" />
    <Grid container>
    <Grid item xs={12} className={classes.introGrid}>
      <Grid container>
        <Grid item xs={1} md={2}></Grid>
        <Grid item xs={11} md={10}>
          <Typography className={classes.hi}>Hello World!</Typography>
          <div className={classes.h1}>
            <Typography className={classes.im}>I'm</Typography>
            <Typography variant='h1'>Amanjot Singh.</Typography>
          </div>
          <Typography variant='h2'  className={classes.h2}>I'm a full-Stack developer focused on crafting stable, clean & user-friendly experiences.</Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paperBlog}>
          <h3 className={classes.blogs}>BLOGS</h3>
          <Grid container className={classes.wrapper}><GetRecentBlogs classes={classes}/></Grid>
      </Paper>
    </Grid>
    </Grid>
  </Layout>
)
}
export default IndexPage

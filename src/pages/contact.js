import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import Layout from "../components/layout/Layout"
import SEO from "../components/seo";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  const center = { 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return {
    mainDiv: {
      ...center,
      'flex-direction': 'column',
      height: 'calc(70vh - 3rem)'
    },
    h1: {
      fontSize: '4rem',
      textDecoration: 'underline',
    },
    contacts:{},
    social: {},
    personal: {
      ...center
    },
    icon: {
      fontSize: '5rem',
      paddingRight: '1rem'
    },
}});
const AboutUs = () => {
  const classes = useStyles();
  const linkedInLink = 'https://www.linkedin.com/in/amanjot-singh-398731131/';
  const instagramLink = 'https://www.instagram.com/amanjotsinghdhunna/';
  const githubLink = 'https://github.com/amanjotsinghdhunna';
  const onIconClick = (link) => window.open(link);

  return (
  <Layout>
    <SEO title="Contact" />
    <div className={classes.mainDiv}>
      <Typography variant="h1" className={classes.h1}>Get in touch</Typography>
      <div className={classes.contacts}>
        <div className={classes.social}>
          <LinkedInIcon className={classes.icon} onClick={()=> onIconClick(linkedInLink)}/>
          <InstagramIcon className={classes.icon} onClick={()=> onIconClick(instagramLink)}/>
          <GitHubIcon className={classes.icon} onClick={()=> onIconClick(githubLink)}/>
        </div>
        <div className={classes.personal}>
          <PhoneIcon className={classes.icon} onClick={()=> {}} />
          <MailOutlineIcon className={classes.icon} onClick={() => {}}/>
        </div>
      </div>
    </div>
  </Layout>
  )
}
export default AboutUs;


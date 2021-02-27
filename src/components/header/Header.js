import React, { useContext } from 'react';
import { Link } from "gatsby";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// main 
import themeContext from './../../components/context';

import Switch from './../switch/Switch';

const useStyles = makeStyles((theme) => { 
  return createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: `${theme.palette.text.primary}`,
    },
    appBar: {
      background: `${theme.palette.primary}`
    },
    toolbar: {
      color: `${theme.palette.primary.dark}`,
    },
    link: {
      color: `${theme.palette.text.primary}`,
      margin: '1rem',
      fontSize: '1.3rem',
      textDecoration: 'none',
    }
  })}
);

export default function Header() {
  const { themeType, setThemeType } = useContext(themeContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static"  className={classes.appBar}>
        <Toolbar className={classes.toolbar} variant="dense">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            SAP FICO
          </Typography>
          <Link className={classes.link} to="/">Home</Link>
          <Link className={classes.link} to="/aboutUs/">About Us</Link>
          <Switch value={themeType} setValue={setThemeType}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
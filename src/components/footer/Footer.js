import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

//import themeContext from './../../components/context';
const useStyles = makeStyles(() => { 
  return createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      padding: '3rem',
    },
  })}
);

export default function Footer() {
  //const { themeType, setThemeType } = useContext(themeContext);
  const classes = useStyles();
  return (
    <footer className={classes.root}> 
        <Typography>
            © {new Date().getFullYear()}, {` `} amanjotsinghdhunna
        </Typography>
    </footer>
  );
}
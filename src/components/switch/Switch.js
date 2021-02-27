import React from 'react';
import { withStyles, makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => (props) => mapping[props[property]];

// https://stackoverflow.com/questions/60607586/set-typography-text-color-in-material-ui
// https://material-ui.com/customization/components/
// https://www.globalcareercouncilbureau.com/services.html

const styles = {
  root: {
    background: styledBy('color', {
      default: 'white',
      dark: 'black',
    }),
    borderRadius: 3,
    border: 0,
    color: styledBy('color', {
        default: 'black',
        dark: 'white',
      }),
    height: 48,
    padding: '0 30px',
  },
};

// not used for ref only
const StyledButton = withStyles(styles)(({ classes, color, ...other }) => (
  <Button className={classes.root} {...other} />
));

const labelStyle = makeStyles(() => ({
  label: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));


export default function SwitchComp(props) {
  const classes  = labelStyle();
  const { value, setValue } = props
  const handleChange = (event) => {
    const themeType = event.target.checked ? 'dark' : 'default';
    localStorage.setItem('themeType', themeType);
    setValue(themeType);
  };

  const label = <div className={classes.label}> {value === 'dark' ? <Brightness3Icon /> : <WbSunnyIcon />}</div>

  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Switch
            checked={value === 'dark'}
            onChange={handleChange}
            color="primary"
            value="dynamic-class-name"
          />
        }
        label={label}
      />
      {false && <StyledButton color={value}>Dynamic CSS</StyledButton>}
    </React.Fragment>
  );
}
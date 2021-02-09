import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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

const StyledButton = withStyles(styles)(({ classes, color, ...other }) => (
  <Button className={classes.root} {...other} />
));

export default function SwitchComp(props) {
  const color = props.value;
  const setColor = props.setValue;

  const handleChange = (event) => {
    props.setDarkState(prev => !prev);
    setColor(event.target.checked ? 'dark' : 'default');
  };

  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Switch
            checked={color === 'dark'}
            onChange={handleChange}
            color="primary"
            value="dynamic-class-name"
          />
        }
        label="Night mode"
      />
      <StyledButton color={color}>Dynamic CSS</StyledButton>
    </React.Fragment>
  );
}
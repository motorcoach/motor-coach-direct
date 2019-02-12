import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MakesModels from '../data/makesModels.json';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      padding: theme.spacing.unit * 2
    },
    
  });

class Manufacturer extends React.Component {  
  state = {
    value: sessionStorage.getItem('manufacturer'),    
    dieselOrGas: sessionStorage.getItem("dieselOrGas")
  };
  
  handleChange = event => {
    this.setState({ value: event.target.value });
    sessionStorage.setItem("manufacturer", event.target.value)
  };

  render() {
    const { classes } = this.props;
    const handleToUpdate = this.props.handlerToUpdate;   
    if (this.state.dieselOrGas) {
      const manufacturer = Object.keys(MakesModels[this.state.dieselOrGas]).map((make, idx) => {            
        return (                
          <FormControlLabel
            key={idx}
            value={make}
            control={<Radio color="primary" />}
            label={make}
            labelPlacement="start"
            onChange={this.handleChange}
            
          />          
        )   
      })        
      return (
        <Paper className={classes.root} elevation={1}>
          <Typography component={'span'} variant="h5" >
              Select Manufacturer
          </Typography>
          <FormControl component="fieldset">
              <RadioGroup                  
                  aria-label="manufacturer"
                  name="manufacturer"
                  value={this.state.value}
                  onChange={() => {
                    handleToUpdate(this.handleChange)                    
                  }}
                  row
              >
                {manufacturer} 
              </RadioGroup>
          </FormControl>
        </Paper>
      );
    }
  }
}
Manufacturer.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Manufacturer);
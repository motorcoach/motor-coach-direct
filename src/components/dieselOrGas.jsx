import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      padding: theme.spacing.unit * 2
    },
  });

class DieselOrGas extends React.Component {
  state = {
    value: sessionStorage.getItem('dieselOrGas'),
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    sessionStorage.setItem("dieselOrGas", event.target.value);   
  };

  render() {    
    const { classes } = this.props;
    var handleToUpdate  = this.props.handlerToUpdate;
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
            Select Diesel or Gas
        </Typography>              
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="position"
            name="position"
            value={this.state.value}
            onChange={() =>  handleToUpdate(this.handleChange)}
            row
          >            
            <FormControlLabel
                value="diesel"
                control={<Radio color="primary" />}
                label="Diesel"
                labelPlacement="start"
                onChange={this.handleChange}
            />          
            <FormControlLabel
                value="gas"
                control={<Radio color="primary" />}
                label="Gas"
                labelPlacement="start"
                onChange={this.handleChange}
            />
            </RadioGroup>
        </FormControl>
      </Paper>
    );
  }
}
DieselOrGas.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DieselOrGas);
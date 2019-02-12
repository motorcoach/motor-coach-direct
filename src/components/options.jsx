import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import Contact from '../components/contact';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      padding: theme.spacing.unit * 2,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    colorSwitchBase: {
      color: purple[300],
      '&$colorChecked': {
        color: purple[500],
        '& + $colorBar': {
          backgroundColor: purple[500],
        },
      },
    },
    colorBar: {},
    colorChecked: {},
    iOSSwitchBase: {
      '&$iOSChecked': {
        color: theme.palette.common.white,
        '& + $iOSBar': {
          backgroundColor: blue[500],
        },
      },
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.sharp,
      }),
    },
    iOSChecked: {
      transform: 'translateX(15px)',
      '& + $iOSBar': {
        opacity: 1,
        border: 'none',
      },
    },
    iOSBar: {
      borderRadius: 13,
      width: 42,
      height: 26,
      marginTop: -13,
      marginLeft: -21,
      border: 'solid 1px',
      borderColor: blue[400],
      backgroundColor: pink[500],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    iOSIcon: {
      width: 24,
      height: 24,
    },
    iOSIconChecked: {
      boxShadow: theme.shadows[1],
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
  });

  class Options extends Component {
    state = {
      exteriorColor: '',
      interiorColor: '',
      checkedBed: true,
      checkedHeater: true,
      checkedFridge: true,
      checkedSatelite: true,
      checkedCollision: true
    };  
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleChangeSwitch = name => event => {
      this.setState({ [name]: event.target.checked });
      
    };
  
    handleSubmit = event => {
      // https://us-central1-winter-agency-229213.cloudfunctions.net/function-2
      
      
          
    }
    render() {
      const { classes } = this.props; 
      var parser = document.createElement('a');
      parser.href = window.location.href;
      // parser.protocol; // => "http:"
      // parser.hostname; // => "example.com"
      // parser.port;     // => "3000"
      // parser.pathname; // => "/pathname/"
      // parser.search;   // => "?search=test"
      // parser.hash;     // => "#hash"
      // parser.host;     // => "example.com:3000"
      // parser.pathname.split('/').splice(2)
      let paths = parser.pathname.split('/') 
      paths.shift();
      paths = paths.splice(2);
      return (
          <Paper className={classes.root} elevation={1}>
            <Typography component={'span'} variant="h5" >
            {         
              paths.map((path, idx) => {
                if (idx === paths.length - 1) 
                  return path          
                else 
                  return path.replace(/([A-Z])/g, ' $1').trim() + ' ';
              })
            }
            </Typography>    
            <form className={classes.root} autoComplete="off">
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="interiorColor">interior color</InputLabel>
                    <Select
                      value={this.state.interiorColor}
                      onChange={this.handleChange}
                      inputProps={{
                        name: 'interiorColor',
                        id: 'interiorColor',
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="blue">Blue</MenuItem>
                      <MenuItem value="green">Green</MenuItem>
                      <MenuItem value="red">Red</MenuItem>
                    </Select>
                  </FormControl>
                </Paper>
              </Grid>
              
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="exteriorColor">exterior color</InputLabel>
                    <Select
                      value={this.state.exteriorColor}
                      onChange={this.handleChange}
                      inputProps={{
                        name: 'exteriorColor',
                        id: 'exteriorColor',
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="blue">Blue</MenuItem>
                      <MenuItem value="green">Green</MenuItem>
                      <MenuItem value="red">Red</MenuItem>
                    </Select>
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <FormLabel component="legend">Bed</FormLabel>
                <FormControlLabel 
                  control={
                    <Switch
                      classes={{
                        switchBase: classes.iOSSwitchBase,
                        bar: classes.iOSBar,
                        icon: classes.iOSIcon,
                        iconChecked: classes.iOSIconChecked,
                        checked: classes.iOSChecked,
                      }}
                      
                      disableRipple
                      checked={this.state.checkedBed}
                      onChange={this.handleChangeSwitch('checkedBed')}
                      value="checkedBed"
                    />
                  }
                label={this.state.checkedBed ? 'King' : 'Queen'}
                labelPlacement={this.state.checkedBed ? 'start' : 'end'}
                />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <FormLabel component="legend">Water Heater System</FormLabel>
                  <FormControlLabel 
                  control={
                    <Switch
                      classes={{
                        switchBase: classes.iOSSwitchBase,
                        bar: classes.iOSBar,
                        icon: classes.iOSIcon,
                        iconChecked: classes.iOSIconChecked,
                        checked: classes.iOSChecked,
                      }}
                      
                      disableRipple
                      checked={this.state.checkedHeater}
                      onChange={this.handleChangeSwitch('checkedHeater')}
                      value="checkedHeater"
                    />
                  }
                label={this.state.checkedHeater ? 'Tank' : 'Tankless'}
                labelPlacement={this.state.checkedHeater ? 'start' : 'end'}
                />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <FormLabel component="legend">Fridge</FormLabel>
                  <FormControlLabel 
                  control={
                    <Switch
                      classes={{
                        switchBase: classes.iOSSwitchBase,
                        bar: classes.iOSBar,
                        icon: classes.iOSIcon,
                        iconChecked: classes.iOSIconChecked,
                        checked: classes.iOSChecked,
                      }}
                      
                      disableRipple
                      checked={this.state.checkedFridge}
                      onChange={this.handleChangeSwitch('checkedFridge')}
                      value="checkedFridge"
                    />
                  }
                label={this.state.checkedFridge ? 'RV' : 'Residential'}
                labelPlacement={this.state.checkedFridge ? 'start' : 'end'}
                />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <FormLabel component="legend">In Motion Satelite</FormLabel>
                  <FormControlLabel 
                  control={
                    <Switch
                      classes={{
                        switchBase: classes.iOSSwitchBase,
                        bar: classes.iOSBar,
                        icon: classes.iOSIcon,
                        iconChecked: classes.iOSIconChecked,
                        checked: classes.iOSChecked,
                      }}
                      
                      disableRipple
                      checked={this.state.checkedSatelite}
                      onChange={this.handleChangeSwitch('checkedSatelite')}
                      value="checkedSatelite"
                    />
                  }
                label={this.state.checkedSatelite ? 'Yes' : 'No'}
                labelPlacement={this.state.checkedSatelite ? 'start' : 'end'}
                />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <FormLabel component="legend">Collision Avoidance System</FormLabel>
                  <FormControlLabel 
                  control={
                    <Switch
                      classes={{
                        switchBase: classes.iOSSwitchBase,
                        bar: classes.iOSBar,
                        icon: classes.iOSIcon,
                        iconChecked: classes.iOSIconChecked,
                        checked: classes.iOSChecked,
                      }}
                      
                      disableRipple
                      checked={this.state.checkedCollision}
                      onChange={this.handleChangeSwitch('checkedCollision')}
                      value="checkedCollision"
                    />
                  }
                label={this.state.checkedCollision ? 'Yes' : 'No'}
                labelPlacement={this.state.checkedCollision ? 'start' : 'end'}
                />
                </Paper>
              </Grid>
              <Grid item xs={12}>              
                <Contact />
                </Grid>
            </Grid>
            
            </form>          
          </Paper> 
      );
    }
  }
    
  Options.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(Options);
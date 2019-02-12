import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import request from 'request';
import { withRouter } from "react-router";

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      padding: theme.spacing.unit * 2,      
    },
})
class Other extends Component {
    state = {
        email: '',
        manufacturer: '',
        year: '',
        model: '',
        name: '',
        nextMonthPurchase: false,
        other: '',
        phone: ''
    
    }

    handleChangeSwitch = name => event => {
        this.setState({ [name]: event.target.checked });    
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    
    handleSubmit = event => {
        request.post({
            url: 'https://us-central1-winter-agency-229213.cloudfunctions.net/sendgridEmail',
            form: {
              name: this.state.name,
              dieselOrGas: sessionStorage.getItem("dieselOrGas"),
              email: this.state.email,
              floorplan: sessionStorage.getItem("floorplan"),
              manufacturer: sessionStorage.getItem("manufacturer"),
              model: sessionStorage.getItem("model"),
              newOrPreowned: sessionStorage.getItem("newOrPreowned"),
              reason: sessionStorage.getItem("reason"),
              year: sessionStorage.getItem('year')  
            }
        }, (err, response, body) => {
            sessionStorage.clear();
            this.props.history.push('/');
        });
    }

    render() {
        const { classes } = this.props; 
        const { email, manufacturer, year, model, name, nextMonthPurchase, other, phone } = this.state;
        return (
            <Paper className={classes.root} elevation={1}>
                <Typography component={'span'} variant="h6" >
                We source all manufacturers and models for our customers so just because what you're looking for 
is not listed doesn't mean we can't help you locate it.  <br/>
Please fill out the information below and 
one of our specialists will be in contact with you immediately.  We look forward to helping you find 
your new Coach!
                </Typography>
                <FormControl component="fieldset">
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <TextField
                            id="manufacturer"
                            label="Manufacturer"
                            className={classes.textField}
                            value={manufacturer}
                            // error={manufacturer === ''}
                            onChange={this.handleChange('manufacturer')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="year"
                            label="Year"
                            className={classes.textField}
                            value={year}
                            // error={year === ''}
                            onChange={this.handleChange('year')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="model"
                            label="Model"
                            className={classes.textField}
                            value={model}
                            // error={manufacturer === ''}
                            onChange={this.handleChange('model')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="other"
                            label="Other specifications"
                            className={classes.textField}
                            value={other}
                            // error={manufacturer === ''}
                            onChange={this.handleChange('other')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="name"
                            label="Name"
                            className={classes.textField}
                            value={other}
                            // error={manufacturer === ''}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="email"
                            label="Email"
                            className={classes.textField}
                            value={other}
                            // error={manufacturer === ''}
                            onChange={this.handleChange('email')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="phone"
                            label="Phone"
                            className={classes.textField}
                            value={other}
                            // error={manufacturer === ''}
                            onChange={this.handleChange('phone')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel component="legend">If we find your Coach are you looking to purchase in the next month?</FormLabel>
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
                            checked={nextMonthPurchase}
                            onChange={this.handleChangeSwitch('nextMonthPurchase')}
                            value="nextMonthPurchase"
                            />
                        }
                        label={nextMonthPurchase ? 'Yes' : 'No'}
                        labelPlacement={nextMonthPurchase ? 'start' : 'end'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button}
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </Button> 
                    </Grid>
                </Grid>
                </FormControl>
            </Paper>
        );
    }
}
  
Other.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(Other));
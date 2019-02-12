import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { withRouter } from "react-router";
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        padding: theme.spacing.unit * 2,
        
      },
    listItemText: {
        textAlign: "center"
    }
    
  });
class Benefits extends React.Component {
    handleSubmit = event => {
        sessionStorage.clear();
        this.props.history.push('/start');
    }
    render() {
        const { classes } = this.props;
        return (
        <Paper className={classes.paper}>
            <Grid container spacing={24} justify="center">
                <Grid item xs={12}>            
                    <Typography component={'span'} variant="h6">
                    Benefits of using MotorCoach DIRECT
                    </Typography>            
                    <List>
                        <ListItem><ListItemText className={classes.listItemText} primary="Get wholesale level pricing on the Coach of your choice not available to retail consumers"/></ListItem>
                        <ListItem><ListItemText className={classes.listItemText} primary="Never Step foot in a dealership"/></ListItem>
                        <ListItem><ListItemText className={classes.listItemText} primary="Never haggle with a salesman"/></ListItem>
                        <ListItem><ListItemText className={classes.listItemText} primary="Have every detail of your purchase attended to by one of our specialists"/></ListItem>               
                    </List>
                    <Typography component={'span'} variant="h6" >
                    Our Process
                    </Typography>      
                    <List>
                        <ListItem><ListItemText className={classes.listItemText} primary="Choose your Coach and options"/></ListItem>
                        <ListItem><ListItemText className={classes.listItemText} primary="Create a detailed timeline for your purchase with one of our Motorhome specialists"/></ListItem>                                    
                    </List>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button}
                        onClick={this.handleSubmit}
                    >
                        Get Started
                    </Button> 
                </Grid>       
            </Grid>     
        </Paper>
        );
    }
}
Benefits.propTypes = {
    classes: PropTypes.object,
};
  
export default withRouter(withStyles(styles)(Benefits));
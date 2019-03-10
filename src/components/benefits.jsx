import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import liberty from '../img/motorcoach-direct/Liberty-Coach.jpg'

import { withRouter } from "react-router";
const styles = theme => ({
   
    listItemText: {
        fontFamily:'Playfair Display',
        fontSize:'4.75rem',
        color:'#213669',
        textAlign: "left",
        textTransform: 'uppercase',
        maxWidth: '800px',
        lineHeight: '75px',
        paddingBottom: '20px'
    },
    blurb:{
        textAlign: 'left',
        fontFamily: 'lato',
        fontSize: '1.25rem',
        maxWidth: '650px',
        lineHeight: '32px'
    },
    getStartedCard:{
        position: 'absolute',
        backgroundColor: '#ffffffed', 
        maxWidth: '35%',
        top: '250px',
        left: '200px',
        padding: '30px',
        textAlign: 'left',
        minHeight: '57vh'
      },
    button:{
        width: '200px',
        height: '46px',
        fontWeight: 'bold',
        letterSpaceing: '1px',
        background: '#F0C370',
        borderRadius: '2px'
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
            <Card className={classes.card} >
                <CardMedia
                    className='get-started-bg'
                    image={liberty}
                    style={{height: '85vh'}}
                >
                       <Grid container spacing={24} justify="center" className={classes.getStartedCard}>
                        <Grid item xs={12}>            
                            <Typography component={'span'} className={classes.listItemText} >
                                A Buyer's Service for your next adventure
                            </Typography>
                            <p className={classes.blurb}>
                            Get wholesale level pricing on the Coach of your choice not available to retail consumers
                            Never Step foot in a dealership
                            Never haggle with a salesman
                            Have every detail of your purchase attended to by one of our specialists
                            </p>
                            <p className={classes.blurb}>
                            Choose your Coach and options and
                            Create a detailed timeline for your purchase with one of our Motorhome specialists
                            </p>
                            {/* <Typography component={'span'} variant="h5"  className={classes.listItemText} >
                                 Benefits of using MotorCoach DIRECT
                            </Typography>            
                            <List >
                                <ListItem><ListItemText className={classes.listItemText} primary="Get wholesale level pricing on the Coach of your choice not available to retail consumers">Get wholesale level pricing on the Coach of your choice not available to retail consumers</ListItemText> </ListItem>
                                <ListItem><ListItemText className={classes.listItemText} primary="Never Step foot in a dealership"/></ListItem>
                                <ListItem><ListItemText className={classes.listItemText} primary="Never haggle with a salesman"/></ListItem>
                                <ListItem><ListItemText className={classes.listItemText} primary="Have every detail of your purchase attended to by one of our specialists"/></ListItem>               
                            </List>
                            <Typography component={'span'} variant="h5" className={classes.listItemText}>
                                Our Process
                            </Typography>      
                            <List>
                                <ListItem><ListItemText className={classes.listItemText} primary="Choose your Coach and options"/></ListItem>
                                <ListItem><ListItemText className={classes.listItemText} primary="Create a detailed timeline for your purchase with one of our Motorhome specialists"/></ListItem>                                    
                            </List> */}
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
                </CardMedia>
               
            </Card>        
        );
    }
}
Benefits.propTypes = {
    classes: PropTypes.object,
};
  
export default withRouter(withStyles(styles)(Benefits));
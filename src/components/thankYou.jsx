import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import liberty from '../img/motorcoach-direct/Liberty-Coach.jpg'

import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
const styles = theme => ({
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
    blurb:{
        textAlign: 'left',
        fontFamily: 'lato',
        fontSize: '1.25rem',
        maxWidth: '650px',
        lineHeight: '32px'
    },
})
class ThankYou extends Component {  
    render() {        
        const { classes } = this.props;
        return (
        <div>
            <Card className={classes.card} >
                <CardMedia className='get-started-bg'
                    image={liberty}
                    style={{height: '85vh'}}
                >
                    <Grid container spacing={24} justify="center" className={classes.getStartedCard}>
                        <Grid item xs={12}>            
                            <Typography component={'span'} className={classes.listItemText} >
                                Thank you for choosing MotorCoach Direct.  
                            </Typography>
                            <p className={classes.blurb}>
                                An agent will reaching out to you shortly. We look forward to helping you find your new Coach!
                            </p>                           
                        </Grid>
                    </Grid>
                </CardMedia>
            </Card>
        </div>
        )
    }
}

export default withRouter(withStyles(styles)(ThankYou))
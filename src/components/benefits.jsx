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
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Stepper from '../components/stepper';
import Financials from '../components/financials';

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
        borderRadius: '2px',
        boxShadow: 'none',
        '&:hover':{
            background: '#9e7323'
        }
    },
    
  });
class Benefits extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    }

    toggleDrawer = (side, open) => () => {
        
        this.setState({
            [side]: open
        });
    };

    handleHeader = (headerImage) => {
        this.setState({headerImage: headerImage})
    }

    handleSubmit = event => {
        sessionStorage.clear();
        this.props.history.push('/start');
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
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
                            Get wholesale level pricing on the Coach of your choice not available to retail consumers.
                            Never Step foot in a dealership.
                            Never haggle with a salesman.
                            Have every detail of your purchase attended to by one of our specialists.
                            </p>
                            <p className={classes.blurb}>
                            Choose your Coach and options and
                            Create a detailed timeline for your purchase with one of our Motorhome specialists
                            </p>
                        </Grid>
                        <Grid item xs={12}>
                            <Financials/>
                            {/* <Button 
                                variant="contained" 
                                color="primary" 
                                className={classes.button}
                                onClick={this.toggleDrawer('top', true)}
                            >
                                Get Started
                            </Button>  */}
                        </Grid>       
                    </Grid>
                </CardMedia>
               
            </Card>
            <SwipeableDrawer
            open={this.state.top}
            onClose={this.toggleDrawer('top', false)}
            onOpen={this.toggleDrawer('top', true)}
            anchor="top"
            >
            <div
                tabIndex={0}
                role="button"
                
            >
            <Stepper handlerToUpdate = {this.handleHeader} />  
            </div>
            </SwipeableDrawer>     
           </div>

        );
    }
}
Benefits.propTypes = {
    classes: PropTypes.object,
};
  
export default withRouter(withStyles(styles)(Benefits));
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DieselOrGas from './dieselOrGas';
import Manufacturer from './manufacturer';
import Floorplan from './floorplan';
import Model from './model';
import fleetwood_discovery from '../img/fleetwood_discovery.png'
import fleetwood_pace_arrow from '../img/fleetwood_pace-arrow.png'
import american_coach_logo from '../img/american_coach/american_coach_logo.png'
import dynamax_logo from '../img/dynamax/dynamax.png'
import entegra_logo from '../img/entegra/EntegraCoach.png'
import fleetwood_logo from '../img/fleetwood/fleetwood.png'
import monaco_logo from '../img/monaco/monaco.png'
import newmar_logo from '../img/newmar/Newmar.png'
import tiffin_logo from '../img/tiffin/tiffin.png'
import winnebago_logo from '../img/winnebago/winnebago.gif'
import logo from '../img/white-logo.svg'
import american_dream_2019 from '../img/american_coach/2019 american dream.png'
import american_eagle_2019 from '../img/american_coach/2019 american eagle.png'
import american_eagle_heritage_edition_2019 from '../img/american_coach/2019 american eagle heritage edition.png'
import forceHD from '../img/dynamax/Force HD.png'
import dx3 from '../img/dynamax/DX3.png'
import dynaQuestXL from '../img/dynamax/dynaquest XL.png'

const styles = theme => ({
  root: {
    
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class HorizontalLinearStepper extends React.Component {
  state = {
    activeStep: 0,    
    headerImage: '',
    nextStepDisabled: sessionStorage.getItem("dieselOrGas") === null,
    showLogo: true,
    skipped: new Set(),
  }

  isNewOrPreowned = step => {
    return step === 0
  }

  isStepOptional = step => {
    return false
  }

  handleCard = () => {
    this.props.history.push('/card/' + 
      sessionStorage.getItem("dieselOrGas") + "/" + 
      sessionStorage.getItem("manufacturer").replace(/\s/g,'') + "/" + 
      sessionStorage.getItem('year') + "/" +
      sessionStorage.getItem('model').replace(/\s/g,'') + "/" +
      sessionStorage.getItem('floorplan'))
  }

  handleNext = () => {
    const { activeStep } = this.state
    let { skipped } = this.state
    if (activeStep === 1 && sessionStorage.getItem("manufacturer") === "Other") {
      this.props.history.push('/other/');
    } 
    else if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values())
      skipped.delete(activeStep)
    }
    else {
      this.setState({
        activeStep: activeStep + 1,
        skipped,
      })
      this.setNextStepDisabled(activeStep + 1)
    }    
  }  

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
      nextStepDisabled: false
    }));    
  };

  handleEnableNextStep = () => {    
    this.setState(state => ({
      nextStepDisabled: false
    }));    
  }

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };


  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  setNextStepDisabled(step) {
    switch (step) {
      case 0:        
        if (!this.state.nextStepDisabled && sessionStorage.getItem("dieselOrGas") === null) {         
          this.setState({nextStepDisabled: true})
        }
        else if (this.state.nextStepDisabled && sessionStorage.getItem("dieselOrGas") !== null) {
          this.setState({nextStepDisabled: false})
        }
        break;
      case 1:      
        if (!this.state.nextStepDisabled && sessionStorage.getItem("manufacturer") === null) {
           this.setState({nextStepDisabled: true})
        }
        else if (this.state.nextStepDisabled && sessionStorage.getItem("manufacturer") !== null) {
          this.setState({nextStepDisabled: false})             
        }
        break
      case 2:        
        if (!this.state.nextStepDisabled && sessionStorage.getItem("model") === null) {
          this.setState({nextStepDisabled: true})
        }
        else if (this.state.nextStepDisabled && sessionStorage.getItem("model") !== null) {
          this.setState({nextStepDisabled: false})
        }
        break     
      case 3:
        if (!this.state.nextStepDisabled && sessionStorage.getItem("floorplan") === null) {
          this.setState({nextStepDisabled: true})
        }
        else if (this.state.nextStepDisabled && sessionStorage.getItem("floorplan") !== null) {
          this.setState({nextStepDisabled: false})
        }
      break;   
      default: return false
    }
  }
  getSteps = () => {
    return ['Select Diesel or Gas', 'Which Manufacturer', 'Select your Model', 'Select Floorplan'];
  }


  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <DieselOrGas handlerToUpdate = {this.handleEnableNextStep} />;
      case 1:
        return <Manufacturer handlerToUpdate = {this.handleManufacturerHeader} />;
      case 2:
        return <Model handlerToUpdate = {this.handleModelHeader} />;
      case 3:
        return <Floorplan handlerToUpdate = {this.handleEnableNextStep} />
      default:
        return ''
    }
  }

  handleManufacturerHeader = () => {
    this.setState(state => ({
      nextStepDisabled: false
    }));
    switch (sessionStorage.getItem('manufacturer')) {
      case 'American Coach':        
        this.setState({headerImage: american_coach_logo})      
      break
      case 'Dynamax':
        this.setState({headerImage: dynamax_logo})
      break
      case 'Entegra':
        this.setState({headerImage: entegra_logo})  
      break
      case 'Fleetwood':
        this.setState({headerImage: fleetwood_logo})
      break
      case 'Monaco':
        this.setState({headerImage: monaco_logo})
      break
      case 'Newmar':
        this.setState({headerImage: newmar_logo})
      break
      case 'Tiffin':
        this.setState({headerImage: tiffin_logo})
      break
      case 'Winnebago':
        this.setState({headerImage: winnebago_logo})
      break
      case 'Other':
        this.setState({headerImage: logo})
      break
    }    
  } 
  
  handleModelHeader = (year_model) => {
    
    this.setState(state => ({
      nextStepDisabled: false
    }));        
    switch (year_model) {
      case '2019 American Dream':
        this.setState({headerImage: american_dream_2019})
      break
      case '2019 American Eagle':
        this.setState({headerImage: american_eagle_2019})
      break
      case '2019 American Eagle Heritage Edition':
        this.setState({headerImage: american_eagle_heritage_edition_2019})
      break
      case '2019 Force HD':
        this.setState({headerImage: forceHD})
      break
      case '2019 DX3':
        this.setState({headerImage: dx3})
      break
      case '2019 DynaQuest XL':
        this.setState({headerImage: dynaQuestXL})
      break
    }
    
  }
 

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;       
    return (
      <div className={classes.root}> 
        <header className="App-header"> 
          <img src={this.state.headerImage} className="App-headerImage"  />                                    
          <img src={logo} className='App-logo-hide' alt="logo"   />
        </header>       
        <Stepper activeStep={activeStep} >
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            // if (this.isNewOrPreowned(index)) {
            //   form = <NewOrPreowned />
            // }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>                
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography component={'span'}  className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography component={'span'}  className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
              <div>              
                  <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
               
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={activeStep === steps.length - 1 ? this.handleCard : this.handleNext}
                  className={classes.button}
                  disabled={this.state.nextStepDisabled}
                >
                  {activeStep === steps.length - 1 ? 'See RV card' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(withStyles(styles)(HorizontalLinearStepper));
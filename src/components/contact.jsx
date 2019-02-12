import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import NumberFormat from 'react-number-format';
import MaskedInput from 'react-text-mask';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import request from 'request';
import { withRouter } from "react-router";

const styles = theme => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    formControl: {
      marginTop: theme.spacing.unit * 2,
      minWidth: 200,
    },
    formLabel: {
      fontSize:16
    },
    formControlLabel: {
      marginTop: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
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
  });
  
  function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={ref => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }
  
  TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };

  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              value: values.value,
            },
          });
        }}
        thousandSeparator
        prefix="$"
      />
    );
  }

  function EmailFormatCustom(props) {
    const { inputRef, ...other } = props;
    return (
      <MaskedInput
        {...other}
        ref={ref => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={[/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]}
        showMask
      />
    );
  }

  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  class Contact extends React.Component {
    state = {
      annualIncome: '',
      creditScore: '',
      desiredDownPayment: '',
      email: '',
      open: false,                  
      name: '',
      numberformat: '1320',
      phone: '(1  )    -    ',
      purchasePlan: '',
      reason: '',
      w21099: ''
    };
  
    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    handleMaxWidthChange = event => {
      this.setState({ maxWidth: event.target.value });
    };
  
    handleFullWidthChange = event => {
      this.setState({ fullWidth: event.target.checked });
    };
  
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    handleChangeSelect = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleChangeSwitch = name => event => {
      this.setState({ [name]: event.target.checked });
    };

    handleOk = () => {
      this.setState({ open: false });
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
    };
    handleCancel = () => {
      this.setState({ open: false });
    };
    
    render() {
      const { classes } = this.props;
      const { email, phone, purchasePlan, name, numberformat, w21099 } = this.state;
      const isOkEnabled = email.length !== 0 && 
                          name.length !== 0 

      return (
        <React.Fragment>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            Open contact dialog
          </Button>
          <Dialog
            fullWidth={this.state.fullWidth}
            maxWidth={this.state.maxWidth}
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="max-width-dialog-title"
            disableBackdropClick
            disableEscapeKeyDown
          >
            <DialogTitle id="max-width-dialog-title">Contact Information</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please supply information so we may know more about your request
              </DialogContentText>
              <form className={classes.form} noValidate>
                <FormControl className={classes.formControl}>
                  <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <TextField
                          id="name"
                          label="Name"
                          className={classes.textField}
                          value={name}
                          error={name === ''}
                          onChange={this.handleChange('name')}
                          margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                          id="email"
                          label="Email"
                          className={classes.textField}
                          value={email}                            
                          error={email === ''}
                          onChange={this.handleChange('email')}
                          inputComponent={EmailFormatCustom}
                          margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="formatted-text-mask-input">Phone</InputLabel>
                        <Input
                          value={phone}
                          onChange={this.handleChange('phone')}
                          id="formatted-text-mask-input"
                          inputComponent={TextMaskCustom}
                          margin="normal"
                        />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                      id="standard-textarea"
                      label="Reason For Contact"
                      placeholder="Reason For Contact"
                      multiline
                      className={classes.textField}
                      onChange={this.handleChange('reason')}
                      margin="normal"
                    />
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel component="legend">How do you plan to purchase your coach</FormLabel>
                        <FormControlLabel control={
                          <Switch classes={{
                            switchBase: classes.iOSSwitchBase,
                            bar: classes.iOSBar,
                            icon: classes.iOSIcon,
                            iconChecked: classes.iOSIconChecked,
                            checked: classes.iOSChecked,
                          }}
                          disableRipple
                          checked={purchasePlan}
                          onChange={this.handleChangeSwitch('purchasePlan')}
                          value="purchasePlan"
                          />
                        }
                        label={purchasePlan ? 'Cash' : 'Finance'}
                        labelPlacement={purchasePlan ? 'start' : 'end'}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="desiredDownPayment">Desired down payment</InputLabel>
                        <Select
                          value={this.state.desiredDownPayment}
                          onChange={this.handleChangeSelect}
                          inputProps={{
                            name: 'desiredDownPayment',
                            id: 'desiredDownPayment',
                          }}
                        >
                          <MenuItem value="">
                          <em>None</em>
                          </MenuItem>
                          <MenuItem value={'10%'}>10%</MenuItem>
                          <MenuItem value={'20%'}>20%</MenuItem>
                          <MenuItem value={'30%'}>30%</MenuItem>
                          <MenuItem value={'40%'}>40%</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="creditScore">Your credit score?</InputLabel>
                        <Select
                          value={this.state.creditScore}
                          onChange={this.handleChangeSelect}
                          inputProps={{
                              name: 'creditScore',
                              id: 'creditScore',
                          }}
                        >
                          <MenuItem value="">
                          <em>None</em>
                          </MenuItem>
                          <MenuItem value={'650-700'}>650-700</MenuItem>
                          <MenuItem value={'700-750'}>700-750</MenuItem>
                          <MenuItem value={'750-800'}>750-800</MenuItem>
                          <MenuItem value={'800-850'}>800-850</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="annualIncome">Your annual income?</InputLabel>
                        <Select
                          value={this.state.annualIncome}
                          onChange={this.handleChangeSelect}
                          inputProps={{
                              name: 'annualIncome',
                              id: 'annualIncome',
                          }}
                        >
                          <MenuItem value="">
                          <em>None</em>
                          </MenuItem>
                          <MenuItem value={'50k-100k'}>50k-100k</MenuItem>
                          <MenuItem value={'100k-250k'}>100k-250k</MenuItem>
                          <MenuItem value={'250k-500k'}>250k-500k</MenuItem>
                          <MenuItem value={'500k+'}>500k+</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel className={classes.formLabel} component="legend">If self employed or 1099 would you be able to furnish tax returns for the previous 2 tax years if a lender were to need necessary tax years if a lender were to need necessary tax documentation in order to write the loan</FormLabel>
                        <FormControlLabel control={
                          <Switch classes={{
                            switchBase: classes.iOSSwitchBase,
                            bar: classes.iOSBar,
                            icon: classes.iOSIcon,
                            iconChecked: classes.iOSIconChecked,
                            checked: classes.iOSChecked,
                          }}
                          disableRipple
                          checked={w21099}
                          onChange={this.handleChangeSwitch('w21099')}
                          value="w21099"
                          />
                        }
                        label={purchasePlan ? 'Yes' : 'No'}
                        labelPlacement={purchasePlan ? 'start' : 'end'}
                        />
                      
                    </Grid>
                  </Grid>
                                    
                </FormControl>                
              </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={this.handleOk} color="primary" disabled={!isOkEnabled}>
                    Ok
                </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
    }
  }
  
  Contact.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRouter(withStyles(styles)(Contact));
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { bannerCheckboxStylesHook } from '@mui-treasury/styles/checkbox/banner';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select from './select-button';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import { STATES } from 'mongoose';

const Devices = ( ) => {
  const checkboxStyles = bannerCheckboxStylesHook.useCheckbox();
  const formControlLabelStyles = bannerCheckboxStylesHook.useFormControlLabel();
  const accentFormControlLabelStyles = bannerCheckboxStylesHook.useFormControlLabel(
    { color: 'secondary.light' }
  );
  const subtitleStyles = bannerCheckboxStylesHook.useSubtitle();
  const dispatch = useDispatch()

  const selectDevices = state => {
    const Devices = state.devices.devices
    return Devices
  }
  const devices = useSelector(selectDevices)

    const [state, setState] = React.useState({
    smartLock: devices[0].selected,
    smartSpeaker: devices[1].selected,
    chatBot: devices[2].selected,
    smartVacuum: devices[3].selected
  });


  const handleChange = (event) => {
    dispatch({ type: 'devices/deviceUpdated', payload: event.target.name })
    setState({ ...state, [event.target.name]: event.target.checked });  

  };


  return (
         
    <Box display="grid">
      <FormControlLabel
        classes={formControlLabelStyles}
        control={<Checkbox color="primary" 
        checked={state.smartLock}
        onChange={handleChange}
        name="smartLock"
        classes={checkboxStyles} />}
        label={
          <>
            Smart Lock
            <Typography component="span" classes={subtitleStyles}>
              One of many including the August Smartlock
            </Typography>
          </>
        }
      />
      <FormControlLabel
        classes={accentFormControlLabelStyles}
        control={<Checkbox 
            classes={checkboxStyles}
            checked={state.smartSpeaker}
            onChange={handleChange}
            name="smartSpeaker" />}
        label={
          <>
            Smart Speaker
            <Typography component="span" classes={subtitleStyles}>
            Devices such as Amazon Echo, Google Home etc.
            </Typography>
          </>
        }
      />
      <FormControlLabel
        classes={formControlLabelStyles}
        control={<Checkbox color="primary" 
        checked={state.chatBot}
        onChange={handleChange}
        name="chatBot"
        classes={checkboxStyles} />}
        label={
          <>
            Chatbots
            <Typography component="span" classes={subtitleStyles}>
              Chatbots such as FuzzLab and others used by commerical organisations
            </Typography>
          </>
        }
      />
      <FormControlLabel
        classes={formControlLabelStyles}
        control={<Checkbox color="primary" 
        checked={state.smartVacuum}
        onChange={handleChange}
        name="smartVacuum"
        classes={checkboxStyles} />}
        label={
          <>
            Smart Vacuum
            <Typography component="span" classes={subtitleStyles}>
            Specifically a Dongguan Diqee Diqee360 model
            </Typography>
          </>
        }
      />
    </Box>
    
  );
    };

export default Devices;
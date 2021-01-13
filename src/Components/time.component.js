import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import {FormLabel} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Time = () => {

const dispatch = useDispatch()

  const selectTime = state => {
    const TimeValue = state.time.time
    return TimeValue
  }

  const timeValue= useSelector(selectTime)

  const [state, setState] = React.useState({
    value: timeValue[0].value
  });

const handleChange = (event) => {
    dispatch({ type: 'time/timeUpdated', payload: event.target.value })
    setState(event.target.value);     
    };


return (
<FormControl component="fieldset">
  <FormLabel component="legend">Time Available</FormLabel>
  <RadioGroup aria-label="time" name="time1" value={state} onChange={handleChange}>
    <FormControlLabel value="Low" control={<Radio />} label="Low" />
    <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
    <FormControlLabel value="High" control={<Radio />} label="High" />
  </RadioGroup>
</FormControl>

);

};

export default Time;
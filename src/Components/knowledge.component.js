import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import {FormLabel} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Knowledge = () => {

const dispatch = useDispatch()

  const selectKnowledge = state => {
    const KnowledgeValue = state.knowledge.knowledge
    return KnowledgeValue
  }

  const knowledgeValue= useSelector(selectKnowledge)

  const [state, setState] = React.useState({
    value: knowledgeValue[0].value
  });

const handleChange = (event) => {
    dispatch({ type: 'knowledge/knowledgeUpdated', payload: event.target.value })
    setState(event.target.value);     
    };


return (
<FormControl component="fieldset">
  <FormLabel component="legend">Your Knowledge</FormLabel>
  <RadioGroup aria-label="knowledge" name="knowledge1" value={state} onChange={handleChange}>
    <FormControlLabel value="Low" control={<Radio />} label="Low" />
    <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
    <FormControlLabel value="High" control={<Radio />} label="High" />
  </RadioGroup>
</FormControl>

);

};

export default Knowledge;
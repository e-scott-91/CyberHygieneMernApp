import React, { Component } from 'react';
import Devices from "./devices.component";
import Select from "./select-button";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Knowledge from './knowledge.component';
import Time from './time.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));




    export default function DisplayOptions() {
      const classes = useStyles();
  
      return (
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container justify="center">  
              <Paper className={classes.control}>     
                <Grid key={0} item>
                  <Devices />
                </Grid>
              </Paper> 
              <Paper className={classes.control}>  
                <Grid key={1} item>
                  <Knowledge />
                </Grid>
              </Paper> 
              <Paper className={classes.control}> 
                <Grid key={2} item>
                  <Time />
                </Grid>
              </Paper >
            </Grid >
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.control}>
              <Grid container>
                <Grid item>
                  <Select />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      );
    }

    
    
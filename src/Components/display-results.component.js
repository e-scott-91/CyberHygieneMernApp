import React, { Component } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import axios from 'axios';
import CalculateControls from './calculate-controls.component';
import CompileAttacks from './compile-attacks.component';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';

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

const DisplayResults = () => {
  const classes = useStyles()
  
  const [state, setState] = React.useState({
    data: []
    });


  React.useEffect(() => {
      fetchData()
  }, []);

  async function fetchData(){
    await axios.get('http://localhost:5000/data/')
            .then(response => {
                setState({ data: response.data })
            })
          .catch((error) => {
            console.log(error);
          })
  }
      
        

    

      return (
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container justify="center"> 
            <Paper className={classes.control}>  
                <Grid key={1} item>
                <h3>Vulnerabilities if you do not apply the Hygiene Measures</h3>
                      <table className="table">
                        <thead className="thead-light">
                          <tr>
                          <th>Attacks</th>
                          </tr>
                        </thead>
                      <tbody>
                  <CompileAttacks />
                  </tbody>
                  </table>
                </Grid>
              </Paper> 
              <Paper className={classes.control}>     
                <Grid key={0} item>
                    <h3>Hygiene Measures to Implement</h3>
                      <table className="table">
                        <thead className="thead-light">
                          <tr>
                          <th>Hygiene Measure</th>
                          </tr>
                        </thead>
                      <tbody>
                        <CalculateControls Data={state.data} />
                      </tbody>
                      </table>
                </Grid>
              </Paper> 
              </Grid>
            </Grid>
            </Grid>
        
      )
    
    }

    export default DisplayResults;
    

  
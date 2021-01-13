import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import Calculations from "./display-results.component";
import { BrowserRouter as Router, Route} from "react-router-dom";


export default class Select extends Component {


    render() {
      return (
          <Link to="/results/">
            <Button>
              <span>Select</span>
            </Button>
          </Link>

        )
        }
  }



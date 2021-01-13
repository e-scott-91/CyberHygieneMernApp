import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import DisplayOptions from "./Components/display-options.component";
import Navbar from "./Components/navbar.component";
import Welcome from "./Components/welcome";
import DisplayResults from "./Components/display-results.component";
import {Link} from "react-router-dom";
import Info from "./Components/info";
import { bannerCheckboxStylesHook } from '@mui-treasury/styles/checkbox/banner';


 const App = () => {

    return(
      <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Welcome} />
      <Route path="/results/" component={DisplayResults} />
      <Route path="/selectoptions" component={() => <DisplayOptions />} />
      <Route path="/info" component={Info} />
      </div>
    </Router>
    );
  }


export default App;

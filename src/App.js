
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>  
       <Navbar/>
       
          <Switch>
          <Route exact path="/"><NewsComponent key="general" pageSize={6} category="general"/></Route> 
          <Route exact path="/home"><NewsComponent key="general" pageSize={6} category="general"/></Route> 
          <Route exact path="/business"><NewsComponent key="business" pageSize={6} category="business"/></Route> 
          <Route exact path="/entertainment"><NewsComponent key="entertainment" pageSize={6} category="entertainment"/></Route> 
          <Route exact path="/general"><NewsComponent key="general" pageSize={6} category="general"/></Route> 
          <Route exact path="/health"><NewsComponent key="health" pageSize={6} category="health"/></Route> 
          <Route exact path="/science"><NewsComponent key="science" pageSize={6} category="science"/></Route> 
          <Route exact path="/sports"><NewsComponent key="sports" pageSize={6} category="sports"/></Route> 
          <Route exact path="/technology"><NewsComponent key="technology" pageSize={6} category="technology"/></Route> 
         </Switch>
        </Router>
      </div>
    )
  }
}

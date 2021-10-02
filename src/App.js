
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

export default class App extends Component {

  apiKey = "e18b6f36558845b0b4baa5fd1922773f"

  state = { 
    progress:0
  }

  setProgress = (progress) =>{
    this.setState({progress:progress})
  }

  render() {
    return (
     
      <div>
      <Router>  
      <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
      />
       <Navbar/>
       
          <Switch>
          <Route exact path="/"><NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} category="general"/></Route> 
          <Route exact path="/home"><NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} category="general"/></Route> 
          <Route exact path="/business"><NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} category="business"/></Route> 
          <Route exact path="/entertainment"><NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} category="entertainment"/></Route> 
          <Route exact path="/general"><NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} category="general"/></Route> 
          <Route exact path="/health"><NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={6} category="health"/></Route> 
          <Route exact path="/science"><NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={6} category="science"/></Route> 
          <Route exact path="/sports"><NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} category="sports"/></Route> 
          <Route exact path="/technology"><NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={6} category="technology"/></Route> 
         </Switch>
         <Footer/>
        </Router>
      </div>
    )
  }
}

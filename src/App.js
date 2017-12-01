import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Browse from './components/Browse/Browse';
import Details from './components/Details/Details';
import Shelf from './components/Shelf/Shelf';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      <Route component={Login} path='/' exact />
      <Route component={Browse} path='/browse' />
      <Route component={Details} path='/details' />
      <Route component={Shelf} path='/shelf' />
      </div>
      </HashRouter>
    );
  }
}

export default App;

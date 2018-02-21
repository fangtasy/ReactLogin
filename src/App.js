import React, { Component } from 'react';
import Login from './container/login'
import Register from './container/register'
import './App.css';

class App extends Component {
  render() {
    return (
    	<div>
      <Login />
      <Register />
      </div>
    );
  }
}

export default App;

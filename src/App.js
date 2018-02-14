import React, { Component } from 'react';
import Auth from './component/auth'
import Register from './container/register'
import './App.css';

class App extends Component {
  render() {
    return (
    	<div>
      <Auth />
      <Register />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
	<Header navNames={["here", "there"]} navUrls={['null','null']} home={{url:'null', txt:"swag"}}/>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Grid from './components/Grid.js';

class App extends Component {
  render() {
    return (
	    <div>
	<Header navNames={["here", "there"]} navUrls={['null','null']} home={{url:'null', txt:"swag"}}/>
	<Grid gridItems={[
		{img:'http://ttaanngg.com/img/stolebeach.jpg',
		url:'http://ttaanngg.com/stolebeach.html'},
		{img:'http://ttaanngg.com/img/masks.jpg',
		url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'}
		
	]} />
	    </div>
    );
  }
}

export default App;

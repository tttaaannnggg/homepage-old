import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Grid from './components/Grid.js';
import stoleBeach from './resources/stolebeach.jpg';

class App extends Component {
  render() {
    return (
	    <div className="wrapper">
	<Header navNames={["img", "txt", 'nfo', "etc"]} navUrls={['null','null', null, null]} home={{url:'null', txt:"tang"}}/>
	<Grid gridItems={[
		{img:stoleBeach,
		url:'http://ttaanngg.com/stolebeach.html'},
		{img:'http://ttaanngg.com/img/masks.jpg',
		url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'},
		{img:'http://ttaanngg.com/img/masks.jpg',
		url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'},
		{img:'http://ttaanngg.com/img/masks.jpg',
		url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'},
		{img:'http://ttaanngg.com/img/masks.jpg',
		url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'},
		{img:'http://ttaanngg.com/img/masks.jpg',
		url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'},
		{img:'http://ttaanngg.com/img/masks.jpg',
		url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'},
		{img:'http://ttaanngg.com/img/masks.jpg',
		url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'}
	]} />
	    </div>
    );
  }
}

export default App;

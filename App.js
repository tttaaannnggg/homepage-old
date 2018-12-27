import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Grid from './components/Grid.js';
import stoleBeach from './resources/stolebeach.jpg';
import Detail from './components/Detail.js';
import GridItem from './components/GridItem.js';

// let's refactor the way that the gallery works
// maybe use an array of objects? 
// {url: , thumbnail: , detail: [images, images, images]}

const portfolio = [
	{name: 'stolebeach',
		thumb: '/img/stolebeach.jpg',
		detail: ['"[your extension description here]img/stolebeach/s1.jpg','img/stolebeach/s2.jpg']
	},
	{name: 'stolebeach',
		thumb: '/img/stolebeach.jpg',
		detail: ['"[your extension description here]img/stolebeach/s1.jpg','img/stolebeach/s2.jpg']
	},
	{name: 'stolebeach',
		thumb: '/img/stolebeach.jpg',
		detail: ['"[your extension description here]img/stolebeach/s1.jpg','img/stolebeach/s2.jpg']
	},
];

class App extends Component {
  render() {
    return (
	    <BrowserRouter>
	    <div className="wrapper">
	<Header navNames={["img", "txt", 'nfo', "etc"]} navUrls={['null','detail', null, null]} home={{url:'/', txt:"tang"}}/>
	    <Route exact={true} path='/' render={()=>(
		<Grid gridItems={[
				{thumb:stoleBeach, url:'/stolebeach'},
				{thumb:'http://ttaanngg.com/img/masks.jpg', url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'},
				{thumb:stoleBeach, url:'/stolebeach'},
				{thumb:'http://ttaanngg.com/img/masks.jpg', url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'}
	]}/>
    )}/>
		    <Route exact={true} path='/stolebeach' render={()=>(
			<Detail detailItems={[stoleBeach,stoleBeach]}/>
		    )}/>
	    </div>
	    </BrowserRouter>
    );
  }
}

export default App;

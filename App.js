import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Grid from './components/Grid.js';
import stoleBeach from './resources/stolebeach.jpg';
import Detail from './components/Detail.js';

class App extends Component {
  render() {
    return (
	    <BrowserRouter>
	    <div className="wrapper">
	<Header navNames={["img", "txt", 'nfo', "etc"]} navUrls={['null','detail', null, null]} home={{url:'/', txt:"tang"}}/>
	    <Route exact={true} path='/' render={()=>(
		<Grid gridItems={[
				{img:stoleBeach, url:'http://ttaanngg.com/stolebeach.html'},
				{img:'http://ttaanngg.com/img/masks.jpg', url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'},
				{img:stoleBeach, url:'http://ttaanngg.com/stolebeach.html'},
				{img:'http://ttaanngg.com/img/masks.jpg', url:'https://drive.google.com/file/d/13ye9MNcgyysPTSa1zr2iheG5xlWgVO8_/view?usp=sharing'}
	]}/>
    )}/>
		    <Route exact={true} path='/detail' render={()=>(
			<Detail detailItems={[stoleBeach,stoleBeach]}/>
		    )}/>
	    </div>
	    </BrowserRouter>
    );
  }
}

export default App;

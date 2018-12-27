import React, { Component } from 'react';
import GridItem from './GridItem.js';
// this is the gallery grid 
// it will dynamically generate a grid
// based off of arrays passed to it
// we can generate the grid in the render method
// gridItems will be an array of objects with url and img

class Grid extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const grid = [];
		for (let i = 0; i < this.props.gridItems.length; i++){
			console.log(this.props.gridItems[i].img);
			grid.push(
				<GridItem {...this.props.gridItems[i]} key={'gallery'+i}  />
			)
		}
		return (
			<div className="grid">
				{grid}
			</div>
		)
	}
}

export default Grid;

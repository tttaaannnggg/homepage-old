import React, { Component } from 'react';
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
			grid.push(
				<a href={this.props.gridItems[i].url}>
					<img src={this.props.gridItems[i].img[i]} />
				</a>)
		}
		return (
			<div>
				{grid}
			</div>
		)
	}
}

export default Grid

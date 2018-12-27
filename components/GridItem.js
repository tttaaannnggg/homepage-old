import React, { Component } from 'react';

// generate single item for use by grid
// let the grid handle assigning css classes? (no it doesn't work)
// should take single element of portfolioArray
// you want to pass {...portfolio[i]} to this element
// how does routing interact?

export default class GridItem extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className='gridItem'>
				<a href={this.props.url}>
					<img src={this.props.thumb} />
				</a>
			</div>
		)
	}
}


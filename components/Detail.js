import React, { Component } from 'react';
// How to use:
// <Detail detailItems = [] />
// takes array of image URLs in prop detailItems
// outputs img tags nested in a div
// maybe add link functionality?
// how does routing work?
class Detail extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const detail=[];
		for (let i=0; i < this.props.detailItems.length; i++){
			detail.push(
				<img src={this.props.detailItems[i]} key={'detail' + i}/>
			);
		};
		return(
			<div className="detail">
				{detail}
			</div>
		)
	}
}

export default Detail;

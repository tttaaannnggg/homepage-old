import React, { Component } from 'react';

/*
this is gonna be the header. it will have a link back to the landing page (my name) and a menu that will generate a few links to various pages
TODO: figure out CSS. Do I want to use a grid?
*/

class Header extends Component {
	constructor(props){
		// props should include home + array for img/txt/nfo/etc
		// navNames / navUrls
		super(props);
	}

	render(){
		const navButtons = [];
		for (let i = 0; i < this.props.navNames.length; i++){
			navButtons.push(
				<a href={this.props.navUrls[i]} id={"nav" + i} key={"nav" + i}>
					{this.props.navNames[i]}
				</a>
			);
			navButtons.push("/");
		}
		return (
			<div>
				<a href={this.props.home.url}>{this.props.home.txt}</a>
				<span id='navbuttons'>{navButtons}</span>
			</div>
		)
	
	}
}

export default Header;

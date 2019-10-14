import React,{Component} from 'react';
import './NavBar.css';

class NavBar extends Component{
	render(){
		return(
			<div>
				<ul className = "nav-list">
				  <li className = "nav-item"><a className="active nav-link" href="#home">Home</a></li>
				  <li className = "nav-item"><a className = "nav-link" href="#contact">Contact</a></li>
				  <li className = "nav-item"><a className = "nav-link" href="#about">About</a></li>
				</ul>
		    </div>
		);
	}
}

export default NavBar;
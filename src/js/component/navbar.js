import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-transparent color-white mb-3">
			<Link to="/">
				<span className="navbar-brand text-white mb-0 h1">
				<img src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png" style={{width:"100px",height:"50px",objectFit:"cover"}}></img>
				</span>
			</Link>
			<div className="ml-auto">
				
			</div>
		</nav>
	);
};

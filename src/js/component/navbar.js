import React from "react";
import { Link } from "react-router-dom";



export const Navbar = () => {
	// const {store, actions} = useContext(Context);
	return (
		<nav style={{position:"relative",zIndex:"1"}} className="navbar bg-transparent color-white d-flex justify-content-center">
			<Link to="/">
				<span className="navbar-brand text-white mb-0 h1">
				<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" style={{width:"50%",height:"50%",objectFit:"cover"}}></img>
				</span>
			</Link>
			
		</nav>
	);
};

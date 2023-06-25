import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar bg-transparent color-white d-flex justify-content-center">
			<Link to="/">
				<span className="navbar-brand text-white mb-0 h1">
				<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" style={{width:"80%",height:"100%",objectFit:"cover"}}></img>
				</span>
			</Link>
			
		</nav>
	);
};

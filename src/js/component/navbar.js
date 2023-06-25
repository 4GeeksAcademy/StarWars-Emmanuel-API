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
			<div className="dropdown">
				<button className="btn btn-warning dropdown-toggle  m-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu mx-auto">
					{
						store.favorites.map((char, planet, vehicle, index, favorites)=> {
							return (
							<li style={{color:"rgb(255, 179, 0"}}  key={index}><h2>{char.name} {planet.name} {vehicle.name} <box-icon type='solid' class='bx-lg  bx-tada-hover' color="orange" name='trash-alt'onClick={()=>{
								actions.deleteFavorite(favorites)
							}}
							>
							</box-icon></h2>
							</li>
							)
						})
					}
				</ul>
			</div>
		</nav>
	);
};

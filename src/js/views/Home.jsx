import React, { useContext, useEffect } from "react";
import People from "../component/People.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx"
import { Context } from '../store/appContext.js';


import "../../styles/home.css";


const Home = () => {

	const { actions,store } = useContext(Context)
	
	useEffect(()=>{
		actions.getDataPeople()
	  },[]);

	

	
	return(
	<div className="text-center mx-auto ">
<h1>Characters</h1>

<div className="dropend">
				<button className="btn btn-warning dropdown-toggle  m-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {store.favorites.length}
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



<div className="d-flex lista">
        {store.people.map((char, index) => (
		<People
		key={index}
		index={index}
        char={char}
		/>
        ))}
      </div>

		<Planets/>
		<Vehicles/>
		
	</div>
);};

export default Home;

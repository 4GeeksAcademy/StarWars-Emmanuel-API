import React, { useContext, useEffect } from "react";
import People from "../component/People.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx"
import { Context } from '../store/appContext.js';


import "../../styles/home.css";


const Home = () => {

	const { actions,store } = useContext(Context)
	
	useEffect(()=>{
		actions.getDataPeople();
		actions.getDataPlanets();
		actions.getDataVehicles();
		
	  },[]);



	  
	  const handleDelete = (index) => {
		actions.deleteFavorite(index);
	  };
	

	
	return(
	<div className="text-center mx-auto ">


<div className="dropend">
				<button className="btn btn-warning dropdown-toggle  m-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {store.favorites.length}
				</button>
				<ul className="dropdown-menu mx-auto">
					{
						store.favorites.map((favorite, index)=> {
							
							return (
								
							<li style={{color:"rgb(255, 179, 0"}}  key={index}><h2>{favorite} <box-icon type='solid' class='bx-lg  bx-tada-hover' color="orange" name='trash-alt'onClick={() => handleDelete(index)}
							>
							</box-icon></h2>
							</li>
							)
						})
					}
				</ul>
			</div>

			<h1>Characters</h1>

<div className="d-flex lista">
        {store.char.map((char, index) => (
		<People
		key={index}
		index={index}
        char={char}
		/>
        ))}
      </div>

	  
	  <h1>Planets</h1>
	  <div className="d-flex lista">
        {store.planet.map((planet, index) => (
		<Planets
		key={index}
		index={index}
        planet={planet}
		/>
        ))}
</div>

		<h1>Star Ships</h1>
		<div className="d-flex lista">
        {store.vehicle.map((vehicle, index) => (
		<Vehicles
		key={index}
		index={index}
        vehicle={vehicle}
		/>
        ))}
		</div>
		
	</div>
);};

export default Home;

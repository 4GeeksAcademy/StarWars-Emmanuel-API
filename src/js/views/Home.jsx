import React from "react";
import People from "../component/People.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx"
import "../../styles/home.css";


const Home = () => {

	return(
	<div className="text-center mx-auto mt-5">
		<People/>
		<Planets/>
		<Vehicles/>
		
	
	</div>
);};

export default Home;

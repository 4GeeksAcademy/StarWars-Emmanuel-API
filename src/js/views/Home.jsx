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
<div className="d-flex lista">
        {store.people.map((char, index) => (
		<People
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

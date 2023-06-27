import React from 'react';
import { Context } from '../store/appContext.js';
import { useContext, useState } from 'react';

import {  useNavigate } from 'react-router-dom';


import "../../styles/home.css";




const Vehicles = ({vehicle}) => {
  const { store, actions } = useContext(Context);
const navigate = useNavigate()



	const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/starships/${vehicle.result.uid}.jpg`);
 

    
	function handleImageError() {
		// Código para manejar el error de carga de la imagen
		setImageSource("https://c4.wallpaperflare.com/wallpaper/670/495/775/tv-show-the-mandalorian-baby-yoda-star-wars-the-mandalorian-tv-show-hd-wallpaper-preview.jpg");
	  }


     
           
    const handleDetails = (id) => {
      actions.detailVehicle(id);
      navigate("/starships-details")
      };
      
    
    
    return(

      
	<div className="text-center mt-5">
    
       
        <div className="card  m-2"  
       style={{width:"18rem"}} >
        <img src={imageSource} onError={handleImageError} className="card-img-top" style={{height:"18rem",objectFit:"cover",borderRadius:"20px"}} alt="..."/>
        <div className="card-body" style={{height:"16rem",overflow:"scroll"}}>
        <h5 className="card-title">{vehicle.result.properties.name}</h5>
   
            <div>
              <p className="card-text"><span>Model:</span>{vehicle.result.properties.model}</p>
              <p className="card-text"><span>Manufacturer:</span>{vehicle.result.properties.manufacturer} </p>
              <p className="card-text"><span>Passengers:</span>{vehicle.result.properties.passengers} </p>
            </div>
        

            <button onClick={() => handleDetails(vehicle.result.uid)} className="btn btn-warning m-3">Details</button>


    <button href="#" className="btn btn-warning m-3 " onClick={() => {
									actions.setFavoritesVehicles(vehicle)
								}}  ><strong>♥</strong></button>
  </div>
</div>



	
	</div>
);};

export default Vehicles;

import React from 'react';
import { Context } from '../store/appContext.js';
import { useContext, useEffect } from 'react';

import {  useNavigate } from 'react-router-dom';


import "../../styles/home.css";




const Vehicles = ({char,index}) => {
  const { store, actions } = useContext(Context);
const navigate = useNavigate()



	const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/starships/${vehicle.result.uid +4}.jpg`);
 

    
	function handleImageError() {
		// Código para manejar el error de carga de la imagen
		setImageSource("https://c4.wallpaperflare.com/wallpaper/670/495/775/tv-show-the-mandalorian-baby-yoda-star-wars-the-mandalorian-tv-show-hd-wallpaper-preview.jpg");
	  }


     
           
    const handleDetails = (id) => {
      actions.detailChar(id);
      navigate("/people-details")
      };
      
    
    
    return(

      
	<div className="text-center mt-5">
    
       
        <div className="card  m-2"  
       style={{width:"18rem"}} key={props.index}>
        <img src={imageSource} onError={handleImageError} className="card-img-top" style={{height:"18rem",objectFit:"cover",borderRadius:"20px"}} alt="..."/>
        <div className="card-body" style={{height:"16rem",overflow:"scroll"}}>
        <h5 className="card-title"><span></span> {props.vehicle.name}</h5>
        {filteredVehicles[0] ? (
            <div>
              <p className="card-text"><span>Model:</span>{filteredVehicles[0].model} </p>
              <p className="card-text"><span>Manufacturer:</span>{filteredVehicles[0].manufacturer} </p>
              <p className="card-text"><span>Passenger:</span> {filteredVehicles[0].passengers}</p>
            </div>
          ) : (
            ""
          )}

<Link to="/people-details/" className="btn btn-warning m-3">Details</Link>


    <button href="#" className="btn btn-warning m-3 " onClick={() => {
									actions.setFavoritesVehicles(props.vehicle)
								}}  ><strong>♥</strong></button>
  </div>
</div>



	
	</div>
);};

export default Vehicles;

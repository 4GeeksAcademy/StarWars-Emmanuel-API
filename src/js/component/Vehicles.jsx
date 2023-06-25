import React from 'react';
import { Context } from '../store/appContext.js';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';


import "../../styles/home.css";


const Vehicles = (props) => {
    const { store, actions } = useContext(Context);
 

    const filteredVehicles = store.vehicle.filter(
      (vehicle) => vehicle.name == props.vehicle.name
    );

  
    useEffect(()=>{
      actions.vehicleDescription(props.vehicle.url)
      
    },[]);


     
      
    
    
    return(

      
	<div className="text-center mt-5">
    
       
        <div className="card  m-2"  
       style={{width:"18rem"}} key={props.index}>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${props.index +4}.jpg`} className="card-img-top" style={{height:"18rem",objectFit:"cover",borderRadius:"20px"}} alt="..."/>
        <div className="card-body" style={{height:"13rem",overflow:"scroll"}}>
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

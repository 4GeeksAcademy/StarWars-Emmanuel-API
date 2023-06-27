import React from 'react';
import { Context } from '../store/appContext.js';
import { useContext, useEffect } from 'react';

import {  useNavigate } from 'react-router-dom';


import "../../styles/home.css";



const Planets = ({planet,index}) => {
  const { store, actions } = useContext(Context);
const navigate = useNavigate()



	const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/planets/${planets.result.uid}.jpg`);
 

        
  const handleDetails = (id) => {
		actions.detailChar(id);
    navigate("/people-details")
	  };
    


     
	function handleImageError() {
		// Código para manejar el error de carga de la imagen
		setImageSource("https://c4.wallpaperflare.com/wallpaper/670/495/775/tv-show-the-mandalorian-baby-yoda-star-wars-the-mandalorian-tv-show-hd-wallpaper-preview.jpg");
	  }
    
    
    return(

      
	<div className="text-center mt-5">
    
       
        <div className="card  m-2"  
       style={{width:"18rem"}} key={props.index}>
        <img src={imageSource} onError={handleImageError} className="card-img-top" style={{height:"18rem",objectFit:"cover",borderRadius:"20px"}} alt="..."/>
        <div className="card-body" style={{height:"16rem",overflow:"scroll"}}>
        <h5 className="card-title"><span></span> {props.planet.name}</h5>
        {filteredPlanet[0] ? (
            <div>
              <p className="card-text"><span>Population:</span>{filteredPlanet[0].population} </p>
              <p className="card-text"><span>Terrain:</span>{filteredPlanet[0].terrain} </p>
            </div>
          ) : (
            ""
          )}

<Link to="/people-details/" className="btn btn-warning m-3">Details</Link>


    <button href="#" className="btn btn-warning m-3 " onClick={() => {
									actions.setFavoritesPlanets(props.planet)
								}}  ><strong>♥</strong></button>
  </div>
</div>



	
	</div>
);};

export default Planets;

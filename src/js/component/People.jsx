import React from 'react';
import { Context } from '../store/appContext.js';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';


import "../../styles/home.css";


const People = (props) => {
    const { store, actions } = useContext(Context);
 

    const filteredChars = store.char.filter(
      (char) => char.name == props.char.name
    );

  
    useEffect(()=>{
      actions.charDescription(props.char.url)
      
    },[]);


     
      const handleDetails = (index) => {
		actions.detailChar(index);
	  };
    
    
    return(

      
	<div className="text-center mt-5">
    
       
        <div className="card  m-2"  
       style={{width:"18rem"}} key={props.index}>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.index +1}.jpg`} className="card-img-top" style={{height:"18rem",objectFit:"cover",borderRadius:"20px"}} alt="..."/>
        <div className="card-body" style={{height:"13rem",overflow:"scroll"}}>
        <h5 className="card-title"><span></span> {props.char.name}</h5>
        {filteredChars[0] ? (
            <div>
              <p className="card-text"><span>Gender:</span>{filteredChars[0].gender} </p>
              <p className="card-text"><span>Hair color:</span>{filteredChars[0].hair_color} </p>
              <p className="card-text"><span>Birth Year:</span> {filteredChars[0].birth_year}</p>
            </div>
          ) : (
            ""
          )}

<Link to="/people-details/" onClick={() => handleDetails(props.index)} className="btn btn-warning m-3">Details</Link>


    <button href="#" className="btn btn-warning m-3 " onClick={() => {
									actions.setFavoritesCharacters(props.char)
								}}  ><strong>♥</strong></button>
  </div>
</div>



	
	</div>
);};

export default People;

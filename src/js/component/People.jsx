import React from 'react';
import { Context } from '../store/appContext.js';
import { useContext, useEffect } from 'react';


import "../../styles/home.css";

const People = (props) => {
    const { store, actions } = useContext(Context);
    // const { name, gender, hair_color, eye_color, id } = props ;

    const filteredChars = store.char.filter(
      (char) => char.name == props.char.name
    );

  
    useEffect(()=>{
      actions.charDescription(props.char.url)
      
    },[]);


     
      
    
    
    return(

      
	<div className="text-center mt-5">
       
        <div className="card  m-2"  
       style={{width:"18rem"}} key={props.index}>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.index +1}.jpg`} className="card-img-top" style={{height:"18rem",objectFit:"cover",borderRadius:"20px"}} alt="..."/>
        <div className="card-body" style={{height:"18rem",overflow:"scroll"}}>
        <h5 className="card-title"><h2>Name:</h2> {props.char.name}</h5>
        {filteredChars[0] ? (
            <div>
              <p className="card-text"><h2>Gender:</h2>{filteredChars[0].gender} </p>
              <p className="card-text"><h2>Hair color:</h2>{filteredChars[0].hair_color} </p>
              <p className="card-text"><h2>Birth Year:</h2> {filteredChars[0].birth_year}</p>
            </div>
          ) : (
            ""
          )}
    <button href="#" className="btn btn-warning m-3">Details</button>
    <button href="#" className="btn btn-warning m-3 " onClick={() => {
									actions.setFavoritesCharacters(props.index)
								}}  >♥</button>
  </div>
</div>
{/* onClick={()=>handlerOnView(id)} */}
{/* onClick={()=>handlerOnFav(id)} */}


	
	</div>
);};

export default People;

import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetails = (props) => {
	const params = useParams();
	const {actions, store} = useContext(Context)

   

	useEffect (() => {
		actions.getCharacter(params.id)
	}, []);

	
	return store.oneChar ? (
        <div className="text-center mx-auto ">


            <h1>Character Details</h1>
            <div className="card text-start mx-auto"  
       style={{width:"60%"}} key="">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="card-img-top" style={{height:"18rem",objectFit:"cover",borderRadius:"20px"}} alt="..."/>
        <div className="card-body" style={{height:"13rem",overflow:"scroll"}}>
        <h5 className="card-title"><span>Name:{store.oneChar.name}</span> </h5>
        
        <div className="row_inferior_detalle">
				<div className="row">
					<p className="col2 col-md-2">Eye color</p>
					<p className="col2 col-md-2">Hair color</p>
					<p className="col2 col-md-2">Skin color</p>
					<p className="col2 col-md-2">Gender</p>
					<p className="col2 col-md-2">Height</p>
					<p className="col2 col-md-2">Birth year</p>
				</div>
				<div className="row">
					<p className="col2 col-md-2">{store.oneChar.eye_color}</p>
					<p className="col2 col-md-2">{store.oneChar.hair_color}</p>
					<p className="col2 col-md-2">{store.oneChar.skin_color}</p>
					<p className="col2 col-md-2">{store.oneChar.gender}</p>
					<p className="col2 col-md-2">{store.oneChar.height}</p>
					<p className="col2 col-md-2">{store.oneChar.birth_year}</p>
				</div>
        

                </div>
</div>



            <Link to="/home" className="btn btn-warning m-3">Back to Home</Link>
		
	</div>
    </div>
            ):( <p>Cargando....</p>
            )
        

};

export default PeopleDetails;

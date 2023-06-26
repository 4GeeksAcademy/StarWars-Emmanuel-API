import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetails = (props) => {
	// const params = useParams();
	const {actions, store} = useContext(Context)

   

	// useEffect (() => {
	// 	actions.getCharacter(params.id)
	// }, []);

	

	
	return store.oneChar ? (
        <div className="text-center mx-auto ">


            <h1>Character Details</h1>
            <div className="card text-start mx-auto"  
       style={{width:"60%"}} key="index">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${store.oneChar.id}.jpg`} className="card-img-top" style={{height:"18rem",objectFit:"cover",borderRadius:"20px"}} alt="..."/>
        <div className="card-body" style={{height:"13rem",overflow:"scroll"}}>
        <h5 className="card-title"><span>Name:{store.oneChar.name}</span> </h5>
        
        <div className="row">
				<div className="col-10 mx-auto">
				<h5 className="row ">Description:</h5>
				<p className="col "><i color="white" className='bx-pull-left bx bx-tada-hover bxs-quote-alt-left bx-lg'/>Que la Fuerza te acompañe es una frase utilizada por los personajes del universo de ficción de Star Wars, creado por George Lucas. Era una frase para desear suerte, generalmente cuando los individuos separaban sus caminos, o uno de ellos se disponía a enfrentarse a un desafío inminente</p>
					<h5 className="row ">Eye color:</h5>
					<p className="col ">{store.oneChar.eye_color}</p>
					<h5 className="row ">Hair color:</h5>
					<p className="col ">{store.oneChar.hair_color}</p>
					<h5 className="row ">Gender:</h5>
					<p className="col ">{store.oneChar.gender}</p>
					<h5 className="row ">Height:</h5>
					<p className="col ">{store.oneChar.height}</p>
					<h5 className="row ">Birth year:</h5>
					<p className="col ">{store.oneChar.birth_year}</p>
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

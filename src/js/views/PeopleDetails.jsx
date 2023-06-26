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
        <img src="https://c4.wallpaperflare.com/wallpaper/670/495/775/tv-show-the-mandalorian-baby-yoda-star-wars-the-mandalorian-tv-show-hd-wallpaper-preview.jpg" className="card-img-top" style={{height:"18rem",objectFit:"cover",borderRadius:"20px"}} alt="..."/>
        <div className="card-body" style={{height:"13rem",overflow:"scroll"}}>
        <h5 className="card-title">Name:Grogu (BABY YODA) </h5>
        
        <div className="row">
				<div className="col-12 mx-auto">
				<h5 className="row ">Description:</h5>
				<p className="col "><i color="white" className='bx-pull-left bx bx-tada-hover bxs-quote-alt-left bx-lg'/>Din Grogu es un personaje ficticio de la serie de televisión original The Mandalorian, parte de la franquicia Star Wars. Es miembro de la misma especie que Yoda y de Yaddle, con quienes comparte una fuerte habilidad en la Fuerza.</p>
					<div className="row">
					<h5 className="col ">Eye color:</h5>
					<p className="col ">Black</p>
					<h5 className="col ">Hair color:</h5>
					<p className="col ">Sweety Green</p>
					<h5 className="col ">Gender:</h5>
					<p className="col ">Unknown</p>
					<h5 className="col ">Height:</h5>
					<p className="col ">34 cm</p>
					<h5 className="col ">Birth year:</h5>
					<p className="col ">41 ABY</p>
					</div>
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

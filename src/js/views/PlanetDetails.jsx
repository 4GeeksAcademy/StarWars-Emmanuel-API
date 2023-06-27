import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = (planet) => {
	
	const { actions, store } = useContext(Context)

	const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/planets/${store.onePlanet.result.uid}.jpg`);

	function handleImageError() {
		// Código para manejar el error de carga de la imagen
		setImageSource("https://c4.wallpaperflare.com/wallpaper/670/495/775/tv-show-the-mandalorian-baby-yoda-star-wars-the-mandalorian-tv-show-hd-wallpaper-preview.jpg");
	  }
    

	return (

		<div className="text-center mx-auto ">


			<h1>Planet Details</h1>

			{JSON.stringify(store.onePlanet) !== '{}' ?(
			<div className="card text-start mx-auto"
				style={{ width: "60%" }} key="index">
				<img src={imageSource} onError={handleImageError} className="card-img-top" style={{ height: "18rem", objectFit: "cover", borderRadius: "20px" }} alt="..." />
				<div className="card-body" style={{ height: "13rem", overflow: "scroll" }}>
					<h5 className="card-title">Name: {store.onePlanet.result.properties.name} </h5>

					<div className="row">
						<div className="col-12 mx-auto">
							<h5 className="row ">Description:</h5>
							<p className="col "><i color="orange" className='bx-pull-left bx bx-tada-hover bxs-quote-alt-left bx-lg' />Din Grogu es un personaje ficticio de la serie de televisión original The Mandalorian, parte de la franquicia Star Wars. Es miembro de la misma especie que Yoda y de Yaddle, con quienes comparte una fuerte habilidad en la Fuerza.</p>
							<div className="row">
								<h5 className="col ">Eye color:</h5>
								<p className="col ">{store.onePlanet.result.properties.name}</p>
								<h5 className="col ">Hair color:</h5>
								<p className="col ">{store.onePlanet.result.properties.hair_color}</p>
								<h5 className="col ">Gender:</h5>
								<p className="col ">{store.onePlanet.result.properties.gender}</p>
								<h5 className="col ">Height:</h5>
								<p className="col ">{store.onePlanet.result.properties.height}</p>
								<h5 className="col ">Birth year:</h5>
								<p className="col ">{store.onePlanet.result.properties.birth_year}</p>
							</div>
						</div>



					</div>
				</div>




				<Link to="/home" className="btn btn-warning m-3">Back to Home</Link>

			</div>
			):(
				<h1>No only one selected</h1>
			)}
		</div>
	)


};

export default PlanetDetails;

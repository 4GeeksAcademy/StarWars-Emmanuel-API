import React, { useContext, useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import People from "../component/People.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx"
import { Context } from '../store/appContext.js';
import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";



import "../../styles/home.css";


const Home = () => {

	const { actions,store } = useContext(Context)
	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	let navigate = useNavigate();

	useEffect(() => {
		const myToken = localStorage.getItem("myToken");
		const userLoggedIn = !!myToken;
		setIsLoggedIn(userLoggedIn);
	  }, []);
	
	  function handleLogout() {
		let isLogged = actions.logout();
		if (isLogged) {
		  localStorage.removeItem("myToken");
		  setIsLoggedIn(false)
		  navigate("/");
		}
	  }

	useEffect(()=>{
		const delay = 3500; // 2 secondes

    const timer = setTimeout(() => {
		actions.getDataPeople();
		actions.getDataPlanets();
		actions.getDataVehicles();
		setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer); 
  }, []);



	
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const myToken = localStorage.getItem("myToken");
//     const userLoggedIn = !!myToken;
//     setIsLoggedIn(userLoggedIn);
//   }, []);


	  
	  const handleDelete = (index) => {
		actions.deleteFavorite(index);
	  };
	

	
	return(
		
		<>
    {isLoading ? (
      <div className="loader">
        <h1 className="mx-auto pt-5 mt-5">LOADING...</h1>
      </div>
    ) : isLoggedIn ? (
		  <>
		  <Navbar />
		  
	<div className="text-center mx-auto ">
	<button className="btn btn-warning bx-tada-hover " onClick={handleLogout}>
              Log Out
            </button>
			<h5>Welcome Back: {store.user.email}</h5>

<div className="dropend">
				<button className="btn btn-warning dropdown-toggle  m-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {store.favorites.length}
				</button>
				<ul className="dropdown-menu mx-auto">
					{
						store.favorites.map((favorite, index)=> {
							
							return (
								
							<li style={{color:"rgb(255, 179, 0"}}  key={index}><h2>{favorite}
							 <box-icon type='solid' class='bx-lg  bx-tada-hover' color="orange" name='trash-alt'onClick={() => handleDelete(index)}
							>
							</box-icon>
							{/* <span onClick={() => handleDelete(index)}>X</span> */}
							
							</h2>
							</li>
							)
						})
					}
				</ul>
			</div>

			<h1>Characters</h1>

<div className="d-flex lista">
        {store.char.map((char, index) => (
		<People
		key={index}
		index={index}
        char={char}
		/>
        ))}
      </div>

	  
	  <h1>Planets</h1>
	  <div className="d-flex lista">
        {store.planet.map((planet, index) => (
		<Planets
		key={index}
		index={index}
        planet={planet}
		/>
        ))}
</div>

		<h1>Star Ships</h1>
		<div className="d-flex lista">
        {store.vehicle.map((vehicle, index) => (
		<Vehicles
		key={index}
		index={index}
        vehicle={vehicle}
		/>
        ))}
		</div>
		
	</div>
	<Footer />
      </>
    ) : (
		<>
		<Navbar />
      <h1>You need to login!</h1>
	  </>
    )}
  </>
);
	}

export default Home;



import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
// import styles from "/workspaces/Star-Wars-Blog-Emmanuel/src/styles/home.css"

import  Home  from "./views/Home.jsx";
import PeopleDetails from "./views/PeopleDetails.jsx";
import PlanetDetails from "./views/PlanetDetails.jsx";
import VehicleDetails from "./views/VehicleDetails.jsx";
import injectContext from "./store/appContext";
// import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";

const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/home" element={<Home />} />
						<Route path="/people-details" element={<PeopleDetails />} />
						<Route path="/login" element={<Login />} />
						<Route path="/Signup" element={<Signup />} />
						<Route path="/planet-details" element={<PlanetDetails />} />
						<Route path="/starships-details" element={<VehicleDetails />} />
						<Route path="*" element={<Login />} />
					</Routes>
					
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

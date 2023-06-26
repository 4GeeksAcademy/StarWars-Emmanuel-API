import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets:[],
			vehicles:[],
			char:[],
			planet: [],
			vehicle: [],
			favorites: [],

			oneChar:[]

		},
		actions: {
			
			getDataPeople: async () => {
				try{
					const store = getStore()
					const result = await fetch("https://www.swapi.tech/api/people/")
					const data = await result.json()
					
					setStore({people:data.results})
					console.log("API respondió bien con obj personas", data)
				}catch(error){
					console.log("No se pudo recuperar obj personas ",error)
				}
			},
			getDataPeopleDescription: async (url) => {
				try{
					const store = getStore();
					const result = await fetch(url)
					const data = await result.json()
					
					
					setStore({ char: [...store.char, data.result.properties] });
					console.log("API respondió bien con obj personas", data)
				}catch(error){
					console.log("No se pudo recuperar obj personas ",error)
				}
			},

			charDescription: (url) => {
				getActions().getDataPeopleDescription(url)
			},


			


			getDataPlanets: async () => {
				try{
					const store = getStore()
					const result = await fetch("https://www.swapi.tech/api/planets/")
					const data = await result.json()
					
					setStore({planets:data.results})
					console.log("API respondió bien con obj personas", data)
				}catch(error){
					console.log("No se pudo recuperar obj personas ",error)
				}
			
			},
			getDataPlanetsDescription: async (url) => {
				try{
					const store = getStore();
					const result = await fetch(url)
					const data = await result.json()
					
					
					setStore({ planet: [...store.planet, data.result.properties] });
					console.log("API respondió bien con obj personas", data)
				}catch(error){
					console.log("No se pudo recuperar obj personas ",error)
				}
			},

			planetDescription: (url) => {
				getActions().getDataPlanetsDescription(url)
			},

			getDataVehicles: async () => {
				try{
					const store = getStore()
					const result = await fetch("https://www.swapi.tech/api/starships/")
					const data = await result.json()
					
					setStore({vehicles:data.results})
					console.log("API respondió bien con obj personas", data)
				}catch(error){
					console.log("No se pudo recuperar obj personas ",error)
				}
			
			},
			getDataVehiclesDescription: async (url) => {
				try{
					const store = getStore();
					const result = await fetch(url)
					const data = await result.json()
					
					
					setStore({ vehicle: [...store.vehicle, data.result.properties] });
					console.log("API respondió bien con obj personas", data)
				}catch(error){
					console.log("No se pudo recuperar obj personas ",error)
				}
			},

			vehicleDescription: (url) => {
				getActions().getDataVehiclesDescription(url)
			},
			






			// getCharacter: (uid) => {
			// 	fetch(`https://www.swapi.tech/api/people/${uid}`)
			// 	.then (response => response.json())
			// 	.then ((response) => {
			// 		console.log(response.result.properties);
			// 		setStore({oneChar: response.result.properties})
			// 	})
			// },

			setFavoritesCharacters: (char) => {
				const store = getStore()
				const favoriteCharacterAlreadyExist = store.favorites.includes(char)
				if (!favoriteCharacterAlreadyExist) {
					setStore({favorites: [...store.favorites, char]})
				}
			},
			setFavoritesPlanets: (planet) => {
				const store = getStore()
				const favoritePlanetAlreadyExist = store.favorites.includes(planet)
				if (!favoritePlanetAlreadyExist) {
					setStore({favorites: [...store.favorites, planet]})
				}
			},
			setFavoritesVehicles: (vehicle) => {
				const store = getStore()
				const favoriteVehicleAlreadyExist = store.favorites.includes(vehicle)
				if (!favoriteVehicleAlreadyExist) {
					setStore({favorites: [...store.favorites, vehicle]})
				}
			},
			deleteFavorite: (index) => {
				const store = getStore();
				const updatedFavorites = [...store.favorites];
				updatedFavorites.splice(index, 1);
				setStore({ favorites: updatedFavorites });
			  },
			  
			  detailChar: (index) => {
				const store = getStore();
				const selected = [...store.people];
				selected.splice(!index,1);
				setStore({oneChar: selected });
			  },
			

			},

		}
	};


export default getState;

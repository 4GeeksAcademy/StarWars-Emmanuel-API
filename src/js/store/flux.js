import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			char:[],
			planet: null,
			vehicle: null,
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

					
					
					console.log("API respondió bien con obj personas", data)
				}catch(error){
					console.log("No se pudo recuperar obj personas ",error)
				}
			},

			getDataVehicles: async () => {
				try{
					const store = getStore()
					const result = await fetch("https://www.swapi.tech/api/vehicles/")
					const data = await result.json()

					
					
					console.log("API respondió bien con obj personas", data)
				}catch(error){
					console.log("No se pudo recuperar obj personas ",error)
				}
			},
			
			getCharacter: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
				.then (response => response.json())
				.then ((response) => {
					console.log(response.result.properties);
					setStore({oneChar: response.result.properties})
				})
			},

			setFavoritesCharacters: (char) => {
				const store = getStore()
				const favoriteCharacterAlreadyExist = store.favorites.includes(char)
				if (!favoriteCharacterAlreadyExist) {
					setStore({favorites: [...store.favorites, char]})
				}
			},
			deleteFavorite: (index) => {
				const store = getStore();
				const updatedFavorites = [...store.favorites];
				updatedFavorites.splice(index, 1);
				setStore({ favorites: updatedFavorites });
			  },
			

			},

		}
	};


export default getState;

import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			selectedPeople:{},
			selectedPlanet:{},
			selectedVehicle:{},
			
		},
		actions: {
			
			getDataPeople: async () => {
				try{
					const store = getStore()
					const result = await fetch("https://www.swapi.tech/api/people/")
					const data = await result.json()

					const {getPeople} = getActions()
					await getRealPeople(data)

					const resultado = data.results.map(((e)=>{
						resultado.url
					}))
					
					console.log("API respondió bien con obj personas", data)
				}catch(error){
					console.log("No se pudo recuperar obj personas ",error)
				}
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

			getRealPeople: async ({results}) =>{

				const {fetchData} = getActions()
				const fetchPromises = results.map(obj=> fetchData(obj.url,obj.id));
				await Promises.all(fetchPromises);
				
			},

			fetchData: async(url,id)=>{
				try{
					const response = await fetch(url);
					const data = await response.json();

					const store = getStore()
					setStore({...store,people:[...store.people,data]})
					console.log("Se cargaron los objetos de People")
				}catch (error){
					console.error(`Error al obtener los datos de los objetos personas:${error}`)

				}
			},
			

			

			},

		}
	};


export default getState;

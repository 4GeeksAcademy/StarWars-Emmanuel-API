import React from "react";
import { Context } from '../store/appContext.js';
import { useContext } from 'react';


import "../../styles/home.css";

const People = () => {


    const { store, actions } = useContext(Context);
    // const { full_name, gender, hair_color, eye_color, id } = ;

    // const onePerson = {
    //     full_name,
    //     email,
    //     agenda_slug: store.agendaGlobal,
    //     address,
    //     phone,
    //   };
    
    
    
    return(
	<div className="text-center mt-5">
        <h1>People</h1>

        <div className="card bg-transparent" style={{width:"18rem"}}>
        <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/11/star-wars-nueva-esperanza-luke-skywalker.jpg?tf=3840x" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button href="#" className="btn btn-primary">Go somewhere</button>
  </div>
</div>
	
	</div>
);};

export default People;

import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Inicio = ()=> {
	return(
		<>
			<h1>Soy el Inicio</h1>
			<Link to="/movies">Ir a Movies</Link>
			<Banner />
		</>
	);
	
}

export default Inicio;
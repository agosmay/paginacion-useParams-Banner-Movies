import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import ShowPelis from '../features/movies/components/ShowPelis';
import Card from '../features/movies/components/Card';
import Inicio from '../common/components/Inicio';


const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Inicio />}
				/>
				<Route
					path="/movies"
					element={<ShowPelis />}
				/>
				<Route
					path="/movies/:id"
					element={<Card />}
				/>
			</Routes>
		</BrowserRouter>
	
	);
	
}


export default AppRoutes;
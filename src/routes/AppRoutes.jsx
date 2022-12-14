import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import ShowPelis from '../features/movies/components/ShowPelis';
import Card from '../features/movies/components/Card';
import Inicio from '../common/components/Inicio';
import { Layout } from './Layout';


const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				
					<Route
						
								path="/"
								element={
									<Layout>
									
									<Inicio />
									
									</Layout>
									
									}
					
					/>
					<Route
					
							path="/movies"
							element={
								<Layout>
								
								<ShowPelis />
								
								</Layout>
								
								}
					
					/>
					<Route
					
							path="/movies/:id"
							element={
								<Layout>
								
								<Card />
								
								</Layout>
								
								
								}
						
					/>
				
			</Routes>
		</BrowserRouter>
	
	);
	
}


export default AppRoutes;
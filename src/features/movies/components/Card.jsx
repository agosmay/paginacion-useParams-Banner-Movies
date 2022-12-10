import React , { useState , useEffect }  from 'react';
import axios from 'axios';
import { useParams , Link } from 'react-router-dom';

const Card = () => {
	
	const [datos, setDatos] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	
	const { id } = useParams();
	console.log(id)
	
	
	const fetchingData = async() => {
		try{
			const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=f13cb44e3714892abaf11fbceca2df42`)
			console.log(res.data)
			setDatos(res.data)
		}catch(err){
			setError(true)
		}finally{
			setIsLoading(false)
		}
		
		
	}
	
	
	useEffect(()=> {
		fetchingData();
	},[])
	
	return (
		<>
			<Link to="/movies">Volver a movies</Link>
			
			<h1>Titulo : {datos.original_title}</h1>
			<h1>Resumen : {datos.overview}</h1>
			<h1>Popularity : {datos.popularity}</h1>
		</>
	);
	
	
}

export default Card;
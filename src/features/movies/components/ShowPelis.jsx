import React , { useState , useEffect }  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowPelis = () => {
	
	const [datos, setDatos] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	
	const [counter, setCounter]= useState(1)
	
	
	const atras = ()=> {
		if(counter<=1){
			setCounter(1)
		}else{
			setCounter(counter-1)
		}
	}
	
	
	const siguiente = () => {
		setCounter(counter +1)
		
	}
	
	const fetchingData = async() => {
		
		
		
		try{
			const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=f13cb44e3714892abaf11fbceca2df42&page=${counter}`)
			
				setDatos(res.data.results)
				
				console.log(counter)
			
	
			
		}catch(err){
			setError(true)
		}finally{
			setIsLoading(false)
		}
		
		
	}
	
	
	useEffect(()=> {
		fetchingData();
	},[counter])
	
	return (
		<>
			<Link to="/">Volver al inicio</Link>
			<h1>Aqui se mostraran las pelis</h1>
			<button type="button" onClick={atras}>Atras</button><span>{counter}</span><button type="button" onClick={siguiente}>SIGUIENTE</button>
			<ul>
			{
				datos.map(peli=> (
					<li key={peli.id}><a href={`/movies/${peli.id}`}>{peli.original_title}</a></li>
					
				))
			}
			</ul>
		</>
	);
	
	
}

export default ShowPelis;
import React , { useState, useEffect } from 'react';
import axios from 'axios';


export const useFetch = (service)=> {
	
	const [datos, setDatos] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	
	
	const fetchingData = async (service) => {
		try {
			const res = await axios(service)
			setDatos(res.data.results)
			console.log(res.data.results)
		}catch(err){
			setError(true)
		}finally{
			setIsLoading(false)
		}
	}
	
	useEffect(()=> {
		fetchingData(service);
		
	},[])
	
	const urlImagen = 'https://image.tmdb.org/t/p/w500/'
	
	return { urlImagen, datos }
}
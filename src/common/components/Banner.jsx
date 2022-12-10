import React , { useState , useEffect } from 'react';
import axios from 'axios';
import notebook from '../../assets/notebook.jpg'
import silla from '../../assets/silla.jpg'
import cafe from '../../assets/cafe.jpeg'
import BannerShow from './BannerShow';


const Banner = () => {
	
	const [datos, setDatos] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	
	
	const fetchingData = async () => {
		try {
			const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=f13cb44e3714892abaf11fbceca2df42`)
			setDatos(res.data.results)
			console.log(res.data.results)
		}catch(err){
			setError(true)
		}finally{
			setIsLoading(false)
		}
	}
	
	useEffect(()=> {
		fetchingData();
		
	},[])
	
	const urlImagen = 'https://image.tmdb.org/t/p/w500/'
	
	return(
		<>
			<h1>Soy el Banner</h1>
			<ul>
			{
				datos.map(item=> (
					<BannerShow 
						key= {item.id}
						title={item.original_title}
						poster={`${urlImagen}${item.poster_path}`}
					/>
				
				))
			}
			</ul>
						
			
	
		</>
	
	
	
	
	);
	
}

export default Banner;


/*


*/
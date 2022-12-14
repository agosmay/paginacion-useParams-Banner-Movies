import React , { useState , useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFetch } from '../hooks/useFetch'
import 'swiper/css';
import './Banner.css';
import { urlPage2 } from './servicesBanner.js';

const BannerShow2 = (  ) => {
	
	
	const { urlImagen , datos } = useFetch(urlPage2)
	
	return(
		<>
				<Swiper 
						 
						  slidesPerView={3}
						 
						  
						  onSlideChange={() => console.log('slide change')}
						  onSwiper={(swiper) => console.log(swiper)}
						>
						
						{
							datos.map((movie)=> (
								
								<SwiperSlide key={movie.id}>
									
									<img src={`${urlImagen}${movie.poster_path}`} alt={movie.original_title} className="slide-content"/>
									
									
								
								</SwiperSlide>
							
							
							))
							
						}
						 
						</Swiper>
					
				
		</>
	);
	
	
}

export default BannerShow2;
import React from 'react';

const BannerShow = ( { poster , title } ) => {
	
	return(
		<>
			<img src={poster} alt={title} />
		</>
	);
	
	
}

export default BannerShow;
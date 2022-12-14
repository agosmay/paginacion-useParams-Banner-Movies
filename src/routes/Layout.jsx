import React from 'react';


export const Layout  = ( { children } ) => {
	return (
			<>
				<header>
					<h1>This is the header</h1>
				</header>
				<main>
					{children}
				</main>
				<footer>
					<h1>This is the footer</h1>
				</footer>
			</>
	
	);
	
}
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main id="main-content">
				<div className="container">{children}</div>
			</main>
			<Footer />
		</>
	);
}

export default Layout;

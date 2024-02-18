import React from 'react';
import MainMenu from 'src/components/MainMenu';

function Header() {
	return (
		<header className="site-header">
			<div className="container">
				<MainMenu />
			</div>
		</header>
	);
}

export default Header;

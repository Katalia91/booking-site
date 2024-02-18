import React from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from 'src/components/MainMenu';

function Layout() {
	return (
		<>
			<MainMenu />
			<Outlet />
		</>
	);
}

export default Layout;

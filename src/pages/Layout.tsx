import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
	return (
		<>
			<nav className="main-menu">
				<a href="/">
					<div className="logo">Logo</div>
				</a>
				<ul>
					<li>
						<a href="/gallery">Gallery</a>
					</li>
					<li>
						<a href="/about">Practical info</a>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default Layout;

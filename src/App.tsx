import 'src/styles/index.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from 'src/pages/About';
import Layout from 'src/pages/Layout';
import Home from 'src/pages/Home';
import NoPage from 'src/pages/NoPage';
import Gallery from 'src/pages/Gallery';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="gallery" element={<Gallery />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

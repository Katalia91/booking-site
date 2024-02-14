import React from 'react';

interface HeroProps {
	title: string;
}
function Hero({ title }: HeroProps) {
	return (
		<header className="hero">
			<h1 className="hero">{title}</h1>
		</header>
	);
}
export default Hero;

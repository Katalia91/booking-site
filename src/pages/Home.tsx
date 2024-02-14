import React from 'react';
import Hero from 'src/components/Hero';

function Home() {
	return (
		<>
			<Hero title="Home" />
			<div className="calendar-wrapper">Calendar</div>
			<div className="gallery">
				<figure>
					<img src="https://picsum.photos/id/17/680/380" alt="" />
				</figure>
				<figure>
					<img src="https://picsum.photos/id/19/680/380" alt="" />
				</figure>
				<figure>
					<img src="https://picsum.photos/id/25/680/380" alt="" />
				</figure>
				<figure>
					<img src="https://picsum.photos/id/111/680/380" alt="" />
				</figure>
			</div>
		</>
	);
}

export default Home;

import React from 'react';
import banner from './img/banner.jpg';
import './Home.css';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Services></Services>
		</div>
	);
};

export default Home;
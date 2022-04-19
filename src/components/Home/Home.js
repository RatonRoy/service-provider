import React from 'react';
import banner from './img/banner.jpg';
import './Home.css';

const Home = () => {
	return (
		<section className='banner-container'>
			<img src={banner} alt="" />
			<article className='banner-text'>
				<h3 className="banner-title">Lorem ipsum dolor sit.</h3>
				<p className="banner-info">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus sequi. Reprehenderit consequatur soluta officia ea adipisci provident doloremque, tenetur labore maxime quod? Iusto accusantium odit tempora dolores cupiditate, excepturi perspiciatis, culpa et, omnis maxime quo voluptate quasi aut quibusdam itaque placeat maiores officia obcaecati voluptatum id dolor laborum ab.
				</p>
			  </article>
		</section>
	);
};

export default Home;
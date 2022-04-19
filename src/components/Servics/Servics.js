import React from 'react';
import './Servics.css';

const Servics = ({ service }) => {
	const { name, id, price, img, description } = service;
	return (
		<div className='service'>
			<img src={img} alt="" />
			<article className="services-info">
				<h3> Course : {name}</h3>
				<h5 className='price'>  Fee: {price} </h5>
				<p className='services-text'> {description}</p>
				
					<button className='services-btn'> Take It </button>
				
			</article>
		</div>
	);
};

export default Servics;
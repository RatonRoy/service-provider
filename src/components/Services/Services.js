import React, { useEffect, useState } from 'react';
import Servics from '../Servics/Servics';
import './Services.css';

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("Tutor.json")
		.then(res => res.json())
		.then(data => setServices(data));
	},[])
	return (
		<div className=' services-wrap' id='services'>
			<h1 className='services-title'> Our Services</h1>
			<section className="services-container">
			{
				services.map(service => <Servics
				key={service.id} service = {service}> 

				</Servics>)
			}
			</section>
		</div>
	);
};

export default Services;
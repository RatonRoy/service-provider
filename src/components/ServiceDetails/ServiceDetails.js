import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
	const { servicesId } = useParams();
	return (
		<div>
			<h1> Welcome to the details page. Id { servicesId}</h1>
		</div>
	);
};

export default ServiceDetails;
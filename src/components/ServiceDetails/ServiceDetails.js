import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
	const { servicesId } = useParams();
	return (
		<div>
			<h1 className='text-center'> Welcome to the details page. Id { servicesId}</h1>
			<div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
		</div>
	);
};

export default ServiceDetails;
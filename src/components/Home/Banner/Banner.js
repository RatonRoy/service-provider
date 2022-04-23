import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.jpg';
import slider3 from '../img/slider3.jpg';

const Banner = () => {
	const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={slider1}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3 className='text-dark'> Create a good environment for class work </h3>
					<p className='text-dark'> We are not only focusing good student but also give proper guideline on back bencher students </p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={slider2}
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3 className='text-dark'> We are provide best teacher for making a good class </h3>
					<p className='text-dark'>Our class teacher are very friendly and responsible with students </p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={slider3}
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3> We take  special class for very week students </h3>
					<p>
						we fill proud when our student make a very good carrier for his future. 
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;

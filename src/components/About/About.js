import React from 'react';
import './About.css';
import profile from '../../img/profile/profile.jpg';

const About = () => {
	return (
		<section className='about-wrapper'>
			<div className="img-container">
				<img src = { profile } alt="" srcset="" />
			</div>
			<div className="about-info">
				<p>
				I am Raton Chandro Roy and completed my honours in physics from SUST. Now I am studying for a master's in information technology which remains under the IICT institute of SUST. I am trying to develop my career in the IT sector. That is why I am trying to learn to code whenever I get the opportunity. I want to build my career as a web developer that’s why I enroll in this course. Next three months I want to continue my learning on react, node, and mongodb. After completing this course properly I want to do a remote job as a front-end web developer. 
				</p>
			</div>
		</section>
	);
};

export default About;
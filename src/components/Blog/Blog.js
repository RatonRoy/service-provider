import React from 'react';
import './Blog.css';

const Blog = () => {
	return (
		<section className="blog-container">
			<article className="single-blog">
				<h4 className="question">
					What is the difference between authorization and authentication?
				</h4>
				<div className="answer-container">
					<div className="authentication">
						<h5 className="answer-title">
							Authentication
						</h5>
						<ul className='answer-lists'>
							<li>
								Determines whether users are who they claim to be.
							</li>
							<li>
								Challenges the user to validate credentials (for example, through passwords, answers to security questions, or facial recognition).
							</li>
							<li>
								Usually done before authorization.
							</li>
						</ul>
					</div>
					<div className="authorization">
						<h5 className="answer-title">
				             Authorization
						</h5>
						<ul className='answer-lists'>
							<li>
								Determines what users can and cannot access.
							</li>
							<li>
								Verifies whether access is allowed through policies and rules.
							</li>
							<li>
								Usually done after successful authentication.
							</li>
						</ul>
					</div>
				</div>
			</article>
			<article className="single-blog">
				<h4 className="question">
				 Why are you using firebase?
				</h4>
				<p className="answer">
					I am using firebase for authentications are 
					<ul className='firebase'>
						<li>Email/Password </li>
						<li>Google</li>
						<li>Github</li>
						<li>Facebook</li>
					</ul>
				</p>
			</article>
			<article className="single-blog">
				<h4 className="question">
				What other options do you have to implement authentication?
				</h4>
				<p className="answer">
				Other options  have to implement authentications are 
					<ul className='firebase'>
						<li>Play Games</li>
						<li>Phone</li>
						<li>Game Center</li>
						<li>Apple</li>
						<li>Twitter</li>
						<li>Yahoo</li>
						<li>Microsoft</li> 
					</ul>
				</p>
			</article>
			<article className="single-blog">
				<h4 className="question">
				What other services does firebase provide other than authentication?
				</h4>
				<div className="answer">
					<h6 className="answer-title">
					Flexible, drop-in UI
					</h6>
					<p className="answer-text">
					FirebaseUI provides a customizable, open source, drop-in auth solution that handles the UI flows for signing in users. The FirebaseUI Auth component implements best practices for authentication on mobile devices and websites, which can maximize sign-in and sign-up conversion for your app.
					</p>
					
				</div>
				<div className="answer">
					<h6 className="answer-title">
					Comprehensive security
					</h6>
					<p className="answer-text">
					Built by the same team that developed Google Sign-in, Smart Lock and Chrome Password Manager, Firebase security applies Google's internal expertise of managing one of the largest account databases in the world.
					</p>
					
				</div>
			</article>
		</section>
	);
};

export default Blog;
import React from 'react';
import google from './img.social/google.png';
import github from './img.social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
	const navigate = useNavigate();

	let errorElement;
	if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
	
	if (user || user1) {
		navigate('/');
	}
	return (
		<div className=''>
			<div className='d-flex align-items-center'>
				<div className='bg-primary w-50' style={{ height: '2px' }}></div>
				<p className='mt-3 px-3'>Or</p>
				<div className='bg-primary w-50' style={{ height: '2px' }}></div>
			</div>
			{errorElement}
			<div className="social-container">
				<button className='badge rounded-pill bg-dark w-50 d-block mx-auto my-2 py-3 fs-4'
				onClick={() => signInWithGoogle()}
				>
				<img style={{ width: '2rem' }} src={google} alt="" />
					Google Login</button>
				<button className='badge rounded-pill bg-dark w-50 d-block mx-auto my-2 py-3 fs-4'
				onClick={() => signInWithGithub()}
				>
				<img style={{ width: '2rem', color : 'red' }} src={github} alt="" />
					Github </button>
			</div>
		</div>
	);
};

export default SocialLogin;
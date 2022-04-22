import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'; 
import auth from '../../firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
	// 
	const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
	] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
	const [updateProfile, updating, updateError] = useUpdateProfile(auth);
	const [agree, setAgree] = useState(false);
	const navigate = useNavigate();
	/* if (user) {
		navigate('/');
	} */
	if(loading || updating){
        return <Loading></Loading>
    }
	const navigateLogin = () => {
		navigate('/login');
	}
	
	const handleRegister = async (event) => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/');
	}
	let errorElement;
	if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
	
	return (
		<div className='register-form'>
			<h2 style={{ textAlign:'center' }}>Please Register</h2>
			<form onSubmit={handleRegister}>
				<input type="text" name="name" id="" placeholder='Your Name' />

				<input type="email" name="email" id="" placeholder='Email Address' required />

				<input type="password" name="password" id="" placeholder='Password' required />
				{errorElement}
				<input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
				{/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
				<label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Science Tutor Terms and Conditions</label>
				<input
					disabled={!agree}
					className='w-50 mx-auto btn btn-primary mt-2'
					type="submit"
					value="Register" />
			</form>
			<p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
			<SocialLogin></SocialLogin>
		</div>
	);
};

export default Register;
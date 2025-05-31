import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import registerAnimation from '../../assets/lottie/signup.json';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import SocialLogin from '../SocialComponent/SocialLogin';

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ name, photo, email, password });

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // update user profile
                updateUserProfile(name, photo)
                    .then(() => {
                        // create user entery in the database
                        const userInfo = {
                            name: name,
                            email: email,
                            photo: photo
                        }
                        axios.post('http://localhost:5000/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        title: "Successfully signup & update user profile",
                                        icon: "success",
                                        draggable: true
                                    });
                                }
                            })

                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
        navigate('/');
        // reset the form
        e.target.reset();
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className="text-center lg:text-left md:w-1/2">
                        <Lottie animationData={registerAnimation}></Lottie>
                    </div>
                    <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">SignUp now!</h1>
                            <form onSubmit={handleSignUp} className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Your Name" required />
                                <label className="label">Photo</label>
                                <input type="url" name='photo' className="input" placeholder="Photo URL" required />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">SignUp</button>
                            </form>
                            <p className='text-center font-bold'>Already Registered ? <Link to="/login">Go to Login</Link> </p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
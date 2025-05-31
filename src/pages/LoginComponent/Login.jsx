import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginAnimation from '../../assets/lottie/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialComponent/SocialLogin';


const Login = () => {

    const { signInUser } = useContext(AuthContext);
    // const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                // sweet alert
                Swal.fire({
                    title: "Successfully Login",
                    icon: "success",
                    draggable: true
                });
                // navigate(location?.state ? location.state : '/');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
        // reset the form
        e.target.reset();
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className="text-center lg:text-left md:w-1/2">
                        <Lottie className='w-[400px]' animationData={loginAnimation}></Lottie>
                    </div>
                    <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Login now!</h1>
                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <LoadCanvasTemplate />
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' className="input" placeholder="write the above captcha" />
                                {/* <button className='btn btn-outline btn-xs'>Validate</button> */}
                                <button disabled={disable} className="btn btn-neutral mt-4">Login</button>
                            </form>
                            <p className='text-center font-bold'>New here ? <Link to="/signup">Create an account</Link> </p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
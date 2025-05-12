
import React, { useState, useContext, useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const Login = () => {
    const [error, setError] = useState('');
    const emailRef = useRef();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    // Handle Google Sign-In
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("Google Sign In Error:", error);
                setError(error.message);
            });
    };

    // Handle regular login
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log('Login successful:', user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Login Error:", error);
                setError(error.message);
            });
    };

    // Handle Forgot Password
    const handleForgetPassword = () => {
        const email = emailRef.current.value;

        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('A password reset email has been sent.');
                })
                .catch(error => {
                    setError(error.message);
                });
        } else {
            setError('Please enter your email address.');
        }
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>

                {/* Google Login Button */}
                <div className='flex justify-center mt-4'>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full max-w-xs">
                        <FcGoogle className="text-2xl" />
                        <span className="ml-2">Login with Google</span>
                    </button>
                </div>

                {/* OR Divider */}
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-green-800"></div>
                    <span className="px-2 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow h-px bg-green-900"></div>
                </div>

                {/* Email/Password Login Form */}
                <form onSubmit={handleLogin} className="card-body pt-0">
                    <fieldset className="fieldset space-y-2">
                        <label className="label">Email</label>
                        <input ref={emailRef} required name="email" type="email" className="input input-bordered w-full" placeholder="Email" />

                        <label className="label">Password</label>
                        <input required name="password" type="password" className="input input-bordered w-full" placeholder="Password" />

                        <div onClick={handleForgetPassword} className="text-sm text-blue-500 cursor-pointer">Forgot password?</div>

                        {error && <p className='text-red-400'>{error}</p>}

                        <button type="submit" className="btn btn-neutral w-full mt-4">Login</button>

                        <p className='font-semibold text-center mt-4 text-sm'>
                            Don't have an account? <Link className='text-secondary' to="/auth/register">Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;  //please dont change my some how my gmail image not show


















import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

const Register = () => {
  const [nameError, setNameError] = useState("");
  const { createUser, setUser, updateUser } = useContext(AuthContext); // ✅ Use useContext
  const navigate = useNavigate();

  const auth = getAuth(app); // ✅ Needed for Google Sign-In
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log("Google login successful:", user);
        setUser(user);
        navigate("/");
      })
      .catch(error => {
        console.log("Google login error:", error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch(error => {
            console.log("Profile update failed:", error);
            setUser(user); // Still set basic user info
          });
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Register your account</h2>

        {/* Google Login */}
        <div className='flex justify-center mt-4'>
          <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full max-w-xs">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            <span className="ml-2">Login with Google</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-green-800"></div>
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-green-900"></div>
        </div>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input name="name" required type="text" className="input" placeholder="Name" />
            {nameError && <p className='text-xs text-error'>{nameError}</p>}

            <label className="label">Photo URL</label>
            <input name="photo" required type="text" className="input" placeholder="Photo URL" />

            <label className="label">Email</label>
            <input name="email" required type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input name="password" required type="password" className="input" placeholder="Password" />

            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            <p className='font-semibold text-center'>
              Already have an account? <Link className='text-secondary' to="/auth/login">Login</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React, { useContext, useState } from 'react';


import { Link, useNavigate } from 'react-router-dom';

import {Helmet} from "react-helmet";
import axios from 'axios';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Google from '../../Criminal/Google/Google';
const Login = () => {

   const {user, userSingIn}=useContext(AuthContext)
   const [emailError, setEmailError] = useState('');
   const navigate=useNavigate()
    const handelLogin=(e)=>{
     e.preventDefault()

     const email=e.target.email.value;
     const password=e.target.password.value;

     const newUser={email,
        password
    }
    console.log(newUser)

    if (!email || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }
   
     if(password.length<6){
      swal({
        title: "Firebase: Error (auth/invalid-login-credentials).",
        text: "You clicked the button!",
        icon: "error",
      });
     }else{
      swal({
        title: "You have been successfully Login",
        text: "You clicked the button!",
        icon: "success",
      });
     }


    userSingIn(email,password)
    .then(res=>{
      const loggedInUser=res.user
        console.log(loggedInUser)
        // navigate(location?.state? location.state:'/')
        const user={email}
        axios.post('https://hotel-room-booking-server-eight.vercel.app/jwt',user,{withCredentials:true})
        .then(res=>{
          console.log(res.data)
          if(res.data.success){
             navigate(location?.state? location.state:'/')
          }
        })
    })
    .catch(error=>{
        console.log(error)
    })
    }
    return (
       <div>
          <Helmet>
              
                <title>My Login Page</title>
                
            </Helmet>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
          {/* <img src={logo} alt="" /> */}
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                {emailError && ( 
                  <p className="text-xs text-red-600">{emailError}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>

              </div>
              <p>
                Don't have an Account? Please 
                <Link className='text-red-600 font-bold' to='/register'>Register</Link>
              </p>
            </form>
           <Google></Google>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Login;
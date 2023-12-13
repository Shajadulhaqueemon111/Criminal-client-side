import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import swal from 'sweetalert';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Google from '../../Criminal/Google/Google';

const Register = () => {

    const {userSingUp}=useContext(AuthContext)
    const handelRegister=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
   
        const newUser={name,
            email,
           password
       }
       console.log(newUser)

 
       if(password.length<6){
        swal({
          title: "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).",
          text: "You clicked the button!",
          icon: "error",
        });
       }else{
        swal({
          title: "You have been successfully Register",
          text: "You clicked the button!",
          icon: "success",
        });

       }
      

       userSingUp(email, password)
       .then(res => {
         console.log(res.user);
       })
       .catch(error => {
         console.log(error);
       });
     
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
          {/* <img src={logo} alt="" /> */}
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelRegister} className="card-body">
            <h1 className="text-3xl font-bold">Sing-Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                {/* {emailError && (
                  <p className="text-xs text-red-600">{emailError}</p>
                )} */}
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
                <button className="btn btn-primary">Sing-Up</button>
              </div>
              <p>
                Already have An Account? Please 
                 <Link className='text-red-600 font-bold' to='/login'>Login</Link>
              </p>
            </form>
           <Google></Google>
          </div>
        </div>
      </div>
    );
};

export default Register;
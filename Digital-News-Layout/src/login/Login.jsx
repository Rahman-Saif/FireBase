import React, { useContext } from 'react';
import Navbar from '../pages/shared/navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location=useLocation();
    console.log(`location:`,location);
    const navigate=useNavigate();

    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state?location.state:'/');
        }).catch(error=>{
            console.log(error);
        })
        // console.log(form.get('email'));
    }
    return (
      <div>
        <Navbar></Navbar>
        <div>
          <h2 className="text-3xl my-10 text-center">Please Login!</h2>
          <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='text-center mt-4 '>Dont have an Account?Please <Link to="/register" className='text-red-700'>Register</Link></p>
        </div>
      </div>
    );
};

export default Login;
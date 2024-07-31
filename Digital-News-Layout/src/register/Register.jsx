import React, { useContext } from 'react';
import Navbar from "../pages/shared/navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from '../provider/AuthProvider';
const Register = () => {

    const {createUser} =useContext(AuthContext);

    const handleRegister = (e) => {
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      console.log(form.get('email'));
      const email=form.get('email');
      const password=form.get('password');
      const name=form.get('name');
      const photo=form.get('photo');
      console.log(email,password,name,photo);

      createUser(email,password)
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.log(error)
      })
    };

    return (
      <div>
        <Navbar></Navbar>
        <div>
          <h2 className="text-3xl my-10 text-center">Please Register!</h2>
          <form
            onSubmit={handleRegister}
            className="card-body md:w-3/4 lg:w-1/2 mx-auto"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mt-4 ">
            Already have an Account?Plase
            <Link to="/login" className="text-red-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;
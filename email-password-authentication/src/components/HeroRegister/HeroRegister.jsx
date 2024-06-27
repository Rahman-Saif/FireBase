import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase/Firebase.config";
import { Link } from "react-router-dom";


const HeroRegister = () => {

        const [registerError, setRegisterError] = useState("");
        const [success,setSuccess]=useState('');
        const [showpassword,setshowPassword]=useState(false);
        
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;

    console.log(email, password,accepted);

    if(password.length <6){
        setRegisterError('Password should be at least 6 characters long!');
    }else if(!/[A-Z]/.test(password)){
      setRegisterError('Your password should contain word more than 6 characters!');
      return;
    }
    else if(!accepted){
      setRegisterError('Please accept our terms and conditions!');
      return;
    }


   
    
    setRegisterError('');
    setSuccess('');

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess('user created successfully');

        sendEmailVerification(result.user)
        .then(()=>{
          alert(`Please check your email and verify!`);
        })
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);

      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showpassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button onClick={() => setshowPassword(!showpassword)}>
                {" "}
                Show
              </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <br></br>
            <div className="mb-2">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms" className="ml-2">
                Accept out <a href="">Terms and Conditions!</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {registerError && <p className="text-red-700">{registerError}</p>}
          {success && <p className="text-green-700">{success}</p>}
          <p>
            Already Have an Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;

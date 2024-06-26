import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/Firebase.config';

const Register = () => {

    
    
    return (
      <div className=" border">
        <div className="mx-auto">
          <h2 className="text-3xl">Register!</h2>
          <form onSubmit={handleRegister}>
            <input className='border-spacing-2 'type="email" name="email" id="" placeholder='Your Email Address'/>
            <br />
            <input type="password" name="password" id="" placeholder='Your password'/>
            <br />
            <input type="submit" value="register" id="" />
          </form>
        </div>
      </div>
    );
};

export default Register;
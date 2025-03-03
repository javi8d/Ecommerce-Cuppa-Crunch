import React, { useState } from 'react';
import axios from "axios"

const Signup = () => {
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const onSubmitHandler = async () => { axios.post("http://localhost:5000/signup", {fname, lname, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      aria-labelledby="form-title"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <h1 id="form-title" className="prata-regular text-3xl">
          Sign Up
        </h1>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
    
      <div className="w-full">
          <label htmlFor="fname" className="sr-only">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="First Name"
            aria-label="First Name"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label htmlFor="lname" className="sr-only">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Last Name"
            aria-label="Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
      <div className="w-full">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          aria-label="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Password"
          aria-label="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>      
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
        aria-live="polite"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;

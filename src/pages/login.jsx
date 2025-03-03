import React, { useState } from 'react';
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmitHandler = async (event) => { 
    event.preventDefault();
    try{
      const response = await axios.post("http://localhost:5000/login", {email, password})
      if(response.data.success){
        console.log("Logged in succesfully!")
        localStorage.setItem("token", response.data.token)
      } else{
        setErrorMessage(response.data.message || "Invalid credentials")
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setErrorMessage(err.response?.data?.message || "Server error. Please try again.");
    }
  }
  return (
    <form
      id="loginform"
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      aria-labelledby="form-title"
    >
      {/* Form Title */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <h1 id="form-title" className="prata-regular text-3xl">
          Log In
        </h1>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Email Input */}
      <div className="w-full">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          aria-label="Email"
          required
        />
      </div>

      {/* Password Input */}
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
      

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
        aria-live="polite"
      >
        Log In
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default Login;

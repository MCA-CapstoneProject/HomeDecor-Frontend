import cardImg from "./images/card2.jpg";
import AuthService from "../services/auth.service";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState();
  const [pswd, setPswd] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    AuthService.register(email,pswd)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 m-20 h-3/6 scale-x-75 scale-y-90">
      <div className="sm:block">
        <img className="w-full h-full object-cover" src={cardImg} alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form onSubmit={handleSubmit}
        className="max-w-[480px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            {" "}
            Register
          </h2>
          <div className="flex flex-col text-gray-300 py-2 ">
            <label>Email Id*</label>
            <input
              className="rounded-lg text-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="email"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="flex flex-col text-gray-300 py-2">
            <label>Password*</label>
            <input
              className="rounded-lg text-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              onChange={(e)=>setPswd(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-gray-300 py-2">
            <label>Confirm Password*</label>
            <input
              className="rounded-lg text-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>

          <button type='submit' className="w-full my-5 py-2 bg-teal-500">Register</button>

          <p className="text-gray-300 text-lg">
            Already have an Account?{" "}
            <a className="text-teal-500" href="/login">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

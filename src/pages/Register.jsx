import cardImg from "./images/card2.jpg";
import { register } from "../services/auth.service";
import { useState } from "react";
import { Link } from "react-router-dom";
import { storeAcessPath } from "../helper/Auth.helper";
import { useSelector } from "react-redux";
import { authState } from "../features/authenticate/authSlice";

export default function Register() {
  const [email, setEmail] = useState();
  const [pswd, setPswd] = useState();
  const [cpswd, setCPswd] = useState();
  const [username, setUsername] = useState();
  const auth = useSelector(authState);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    let pathname= window.location.pathname;
    if(cpswd === pswd){
      register(username,email,pswd,pathname,auth.accessPath)
    }
    else{
      //TODO: Replace console.log with toast msg
      console.log("Password mismatch !!");
    }
    
  }
  const changeUrl = (link) => {
    var fullUrl = window.location.href;
    var path = new URL(fullUrl).pathname;
    var segments = path.split("/");
    if (segments.length > 1) {
      segments.pop();
    }
    var newPath = segments.join("/");
    storeAcessPath(newPath.concat(link))
    return(newPath.concat(link))
   
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 m-20 h-3/6 scale-x-75 scale-y-90">
      <div className="sm:block">
        <img className="w-full h-full object-cover" src={cardImg} alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form onSubmit={handleSubmit}
        className="max-w-[480px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4xl text-white font-bold text-center">
            {" "}
            Register
          </h2>
          <div className="flex flex-col text-gray-300 py-2 ">
            <label>Username*</label>
            <input
              className="rounded-lg text-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="username"
              onChange={(e)=>{setUsername(e.target.value)}}
            />
          </div>
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
              onChange={(e) => setCPswd(e.target.value)}
            />
          </div>

          <button type='submit' className="w-full my-5 py-2 bg-teal-500">Register</button>

          <p className="text-gray-300 text-lg">
            Already have an Account?{" "}
            <Link className="text-teal-500" to={changeUrl("/login")}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

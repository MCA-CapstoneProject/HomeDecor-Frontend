import cardImg from "./images/card1.jpg";
import { login } from "../services/auth.service";
import { useState } from "react";
import { Link } from "react-router-dom";
import { storeAcessPath } from "../helper/Auth.helper";

export default function Login() {
  const [email, setEmail] = useState();
  const [pswd, setPswd] = useState();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, pswd);
  };
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 m-20 h-3/6 scale-x-75 scale-y-90">
      <div className="sm:block">
        <img className="w-full h-full object-cover" src={cardImg} alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[480px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl text-white font-bold text-center">
            {" "}
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-300 py-2 ">
            <label>Email</label>
            <input
              className="rounded-lg text-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-gray-300 py-2">
            <label>Password</label>
            <input
              className="rounded-lg text-lg bg-gray-700 text-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              onChange={(e) => setPswd(e.target.value)}
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2 text-lg">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remeber Me
            </p>
            <a className="text-teal-500" href="/reset-password">
              Forgot Password
            </a>
          </div>
          <button type="submit" className="w-full my-5 py-2 bg-teal-500">
            Sign In
          </button>

          <p className="text-gray-300 text-lg">
            Don&apos;t Have an Account?{" "}
            <Link className="text-teal-500" to={changeUrl("/Register")}>
              Register Now!!!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

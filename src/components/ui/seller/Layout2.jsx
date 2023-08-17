/* eslint-disable react/prop-types */

import Sidebar from './Sidebar'
import { useEffect } from "react";
import { fetchAccessToken, setAuthUsername, storeUserId } from "../../../helper/Auth.helper";


function Layout2({children}) {
  useEffect(()=>{
    fetchAccessToken(sessionStorage.getItem('token'))
    storeUserId(sessionStorage.getItem("userId"));
    setAuthUsername(sessionStorage.getItem("uname"));
  },[])
  return (
    <div className="flex text-black h-full">
      <Sidebar/>
      <div className="grow p-10">
        {/* Main content area */}
        {children}
      </div>
      
    </div>
  )
}

export default Layout2
/* eslint-disable react/prop-types */

import './AdminSidebar';
import AdminSidebar from './AdminSidebar';
import { useEffect } from "react";
import { fetchAccessToken, setAuthUsername, storeUserId } from "../../../helper/Auth.helper";


const Adminlayout = ({children}) => {
  useEffect(()=>{
    fetchAccessToken(sessionStorage.getItem('token'))
    storeUserId(sessionStorage.getItem("userId"));
    setAuthUsername(sessionStorage.getItem("uname"));
  },[])
  return (
    <div>
      <div className="">
        <div  className="">
        <AdminSidebar/>
        </div>
        <div className="">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Adminlayout
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { fetchAccessToken, setAuthUsername, storeUserId } from "../../helper/Auth.helper";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  useEffect(()=>{
    fetchAccessToken(sessionStorage.getItem('token'))
    storeUserId(sessionStorage.getItem("userId"));
    setAuthUsername(sessionStorage.getItem("uname"));
  },[])
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar></Navbar>
      </div>
      <main>{children}</main>

      <Footer></Footer>
    </div>
  );
}

export default Layout;

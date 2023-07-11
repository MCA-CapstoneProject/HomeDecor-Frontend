import { Link, Route, Routes } from "react-router-dom";
import { ROUTES_ARR } from "../../constants/routes.constants";
import NotFound from "../../pages/NotFound";
import SuspenseWrapper from "../../lib/utils/routing/SuspenseWrapper";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/fontawesome-free-solid";
import { faHeart,faUserCircle, } from "@fortawesome/fontawesome-free-regular";
import ProductsNavbar from "../ui/ProductsNavbar";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, isAuthenticated, logout, loginWithRedirect, getAccessTokenSilently} = useAuth0();
  const [activeLink, setActiveLink] = useState("");
 
  {/** Here we will get accessToken that will be used with apis */}
  // if (isAuthenticated) {
  //   try {
  //     const accessToken = await getAccessTokenSilently();
  //     console.log('Access token:', accessToken);
  //     // Use the access token as needed
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <nav className="w-full">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                {/* <span className="text-xl font-bold">Logo</span> */}
                <img class="object-fill w-[13rem]"
                  src="assets/logo.png" alt="website-logo" />
              </div>
              {/* Pages */}
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {ROUTES_ARR.map((item) => {
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`text-black hover:text-gray-500 hover:font-semibold px-3 py-2 uppercase ${
                          activeLink === item.path && "text-gray-500 font-bold"
                        }`}
                        onClick={() => handleLinkClick(item.path)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              {/* WishList,Cart,Profile,*/}
              <div className='flex gap-x-10'>
              <Link
                    to="/seller-dashboard"
                    target="_blank"
                    className="bg-gray-500 text-slate-100 p-2 pt-3 rounded-md font-bold hover:text-white hover:bg-gray-600"
                  >
                   Become a seller
                  </Link>
              <div className="flex gap-x-6">
                <Link key="1" to="/wishlist"
                  className={` font-thin text-black hover:text-gray-500 
                  hover:font-semibold  py-2 uppercase`}       >
                  <FontAwesomeIcon className="block  text-[25px] font-[200]  pb-0 
                   text-gray-500 transition-colors" icon={faHeart} />
                  {/* WishList */}
                </Link>
                <Link key="2" to="/cart"
                  className={` font-thin text-black hover:text-gray-500 
                  hover:font-semibold  py-2 uppercase`}       >
                  <FontAwesomeIcon className="block text-[30px] font-[200]  pb-0 
                   text-gray-500 transition-colors" icon={faShoppingBag} />
                  {/* Cart */}
                </Link>

                <Link
                  key=""
                  to=""
                  className={` font-thin text-black hover:text-gray-500 hover:font-semibold py-2 uppercase`}
                  // onClick={() => handleLinkClick(item.path)}
                >
                  <FontAwesomeIcon
                    className="block text-[30px] font-[200]  pb-0 
                   text-gray-500 hover:text-gray-600 transition-colors"
                    icon={faUserCircle}
                  />
                  {/*Profile */}
                </Link>
                
                  <Link
                    to={isAuthenticated && "/"}
                    onClick={()=>{isAuthenticated ? logout({ logoutParams: { returnTo: window.location.origin } }) : loginWithRedirect()}}
                    className="bg-gray-500 text-slate-100 p-2 pt-3 rounded-md font-bold hover:text-white hover:bg-gray-600"
                  >
                    {!isAuthenticated ? "Login" : "Logout"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Products-Navbar */}
      <ProductsNavbar></ProductsNavbar>
    </>
  );
}

export default Navbar;

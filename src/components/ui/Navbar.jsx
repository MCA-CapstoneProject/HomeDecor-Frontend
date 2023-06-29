import { Link, Route, Routes } from 'react-router-dom';
import { ROUTES_ARR } from '../../constants/routes.constants';
import NotFound from '../../pages/NotFound';
import SuspenseWrapper from '../../lib/utils/routing/SuspenseWrapper';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/fontawesome-free-solid";
import { faHeart,faUserCircle, } from "@fortawesome/fontawesome-free-regular";
import ProductsNavbar from './ProductsNavbar';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  }
  return (
    <>
      <nav className="w-full ">
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
                      <Link key={item.path} to={item.path}
                        className={`font-thin text-black hover:text-gray-500 hover:font-semibold px-3 py-2 uppercase ${activeLink === item.path ? "text-[#3C4048]" : ""}`}
                        onClick={() => handleLinkClick(item.path)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
              {/* WishList,Cart,Profile,*/}
              <div className='flex  items-center space-x-6'>
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
                <Link key="3" to="/login"
                  className={` font-thin text-black hover:text-gray-500 hover:font-semibold py-2 uppercase`}
                // onClick={() => handleLinkClick(item.path)}
                >
                  <FontAwesomeIcon className="block text-[30px] font-[200]  pb-0 
                   text-gray-500 transition-colors" icon={faUserCircle} />
                  {/* Profile */}
                  

                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <ProductsNavbar></ProductsNavbar>
      <Routes>
        {ROUTES_ARR.map((item, idx) => (
          <Route key={idx} path={item.path} element={<SuspenseWrapper><item.component /></SuspenseWrapper>} />
        ))
        }
        <Route element={NotFound} />
      </Routes>
    </>

  )
}

export default Navbar;
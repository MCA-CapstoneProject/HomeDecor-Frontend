import React from 'react';
import { Link } from 'react-router-dom';
function Shop() {
  return (
    <>
      <div>
        <div className="my-4">
          <a href="">
            <img className='w-[80%] mx-auto'
              src="assets/featureimages/shop-banner1.png" alt="" srcset="" />
            {/* <img className='' src="assets/featureimages/planting-banner.png"
              alt="plant-banner" /> */}
          </a>
          <h1 className="text-center text-2xl mt-4 font-bold text-[#9d6a37] capitalize">
            Categories We Offer
          </h1>
          {/* Category-Cards */}
          {/* Category-1 */}
          <div className="mt-5">
            <div className="m-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold text-[#9d6a37]">Plant Decoration</h1>
                <Link to="">
                  <a class="duration-150 border-b-[3px] text-gray-500 border-transparent hover:text-gray-600 hover:font-semibold hover:border-[#c66b16]">
                    Show All Products
                  </a>
                </Link>
              </div>
              {/* Categories-Cards */}
              {/* Category-1 */}
              <div className="cards grid grid-cols-3 gap-6 mt-4 overflow-hidden">
                <div className="text-[0.9rem]">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid
                      transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/sculpture-img.jpg" alt="" />
                    <p className="pt-2 ">Sculptural Vases</p>
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/Plastic-Pot.jpg"
                      alt="" />
                    <p className=" pt-2 ">Plastic Pots</p>
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/ceramic-vase.jpg"
                      alt="" />
                    <p className=" pt-2 ">Ceramic Vases</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Category-2 */}
          <div className="mt-5">
            <div className="m-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold text-[#9d6a37]">Art & Photo Frames</h1>
                <Link to="">
                  <a class="duration-150 border-b-[3px] text-gray-500 border-transparent hover:text-gray-600 hover:font-semibold hover:border-[#c66b16]">
                    Show All Products
                  </a>
                </Link>
              </div>
              {/* <h1 className="text-xl font-bold text-[#9d6a37]"></h1> */}
              {/* Categories-Cards */}
              <div className="cards grid grid-cols-3 mt-4 gap-6 overflow-hidden">
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/floral-art.jpg"
                      alt="" />
                    <p className=" pt-2 ">Floal Art Prints</p>
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/single-frame.jpg"
                      alt="" />
                    <p className=" pt-2 ">Single Wall Frame</p>
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/spiritual-image.jpg"
                      alt="" />
                    <p className=" pt-2 ">Spiritual Art Prints </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BANNERS(lamp-plant) */}
          <div className="flex mx-auto w-[95%] gap-4">
            <a href="">
              <img className='' src="assets/featureimages/planting-banner.png"
                alt="plant-banner" />
            </a>
            <a href="">
              <img className='' src="assets/featureimages/lamp-banner.png"
                alt="lamp-banner" />
            </a>
          </div>

          {/* Category-3 */}
          <div className="mt-5">
            <div className="m-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold text-[#9d6a37]">Lamp & Lights</h1>
                <Link to="">
                  <a class="duration-150 border-b-[3px] text-gray-500 border-transparent hover:text-gray-600 hover:font-semibold hover:border-[#c66b16]">
                    Show All Products
                  </a>
                </Link>
              </div>
              {/* <h1 className="text-xl font-bold text-[#9d6a37]"></h1> */}
              {/* Categories-Cards */}
              <div className="cards grid grid-cols-3 mt-4 gap-6 overflow-hidden">
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/night-lamp.jpg"
                      alt="" />
                    <p className=" pt-2 ">Night Lamps </p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/lights-banner.jpg"
                      alt="" />
                    <p className=" pt-2 ">Wall Scones</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/decorative-light.jpg"
                      alt="" />
                    <p className=" pt-2 ">Decorative Lights</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Category-4 */}
          <div className="mt-5">
            <div className="m-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold text-[#9d6a37]">Mirrors</h1>
                <Link to="">
                  <a class="duration-150 border-b-[3px] text-gray-500 border-transparent hover:text-gray-600 hover:font-semibold hover:border-[#c66b16]">
                    Show All Products
                  </a>
                </Link>
              </div>
              {/* <h1 className="text-xl font-bold text-[#9d6a37]"></h1> */}
              {/* Categories-Cards */}
              <div className="cards grid grid-cols-3 mt-4 gap-6 overflow-hidden">
                <div className="text-[0.9rem]">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/floor-mirror.jpg"
                      alt="" />
                    <p className="pt-2 ">Floor Mirrors</p>
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/full-mirror.jpg"
                      alt="" />
                    <p className=" pt-2 ">Full Length Mirrors</p>
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/wall-mirror.jpg"
                      alt="" />
                    <p className=" pt-2 ">Wall Mirrors</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Category-5 */}
          <div className="mt-5">
            <div className="m-8">
            <div className="flex justify-between">
                <h1 className="text-xl font-bold text-[#9d6a37]">Showpieces</h1>
                <Link to="">
                  <a class="duration-150 border-b-[3px] text-gray-500 border-transparent hover:text-gray-600 hover:font-semibold hover:border-[#c66b16]">
                    Show All Products
                  </a>
                </Link>
              </div>
              {/* <h1 className="text-xl font-bold text-[#9d6a37]"></h1> */}
              {/* Categories-Cards */}
              <div className="cards grid grid-cols-3 mt-4 gap-6 overflow-hidden">
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/ganesh-idol.webp"
                      alt="" />
                    <p className=" pt-2 ">Spiritual Scupltures</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/gift-set.jpg"
                      alt="" />
                    <p className=" pt-2 ">Gift Sets</p>
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[24rem] h-[24rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/Figurine.jpg"
                      alt="" />
                    <p className=" pt-2 ">Figurines</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop;
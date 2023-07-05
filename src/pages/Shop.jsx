import React from 'react';

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
              <h1 className="text-xl font-bold text-[#9d6a37]">Plant Decoration</h1>
              {/* Categories-Cards */}
              <div className="cards grid grid-cols-6 mt-4 gap-6 overflow-hidden">
                <div className="text-[0.9rem]">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                      transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/sculpture-img.jpg" alt="" />
                    <p className="pt-2 ">Sculptural Vases</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/Plastic-Pot.jpg"
                      alt="" />
                    <p className=" pt-2 ">Plastic Pots</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/ceramic-vase.jpg"
                      alt="" />
                    <p className=" pt-2 ">Ceramic Vases</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/wooden-pot.jpg"
                      alt="" />
                    <p className=" pt-2 ">Wooden Pots</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages//cylinder-vase.jpg"
                      alt="" />
                    <p className=" pt-2 ">Cylinder Vases</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="https://images.unsplash.com/photo-1589523795613-c3fce27eea23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      alt="" />
                    <p className=" pt-2 ">Hanging Planters</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Category-2 */}
          <div className="mt-5">
            <div className="m-8">
              <h1 className="text-xl font-bold text-[#9d6a37]">Art & Photo Frames</h1>
              {/* Categories-Cards */}
              <div className="cards grid grid-cols-6 mt-4 gap-6 overflow-hidden">
                <div className="text-[0.9rem]">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/wall-hanging-frame.jpeg"
                      alt="" />
                    <p className="pt-2 ">Wall Hanging Frames</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/art-panel.jpg"
                      alt="" />
                    <p className=" pt-2 ">Art Panels</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/art-print.jpg"
                      alt="" />
                    <p className=" pt-2 ">Art Prints</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/floral-art.jpg"
                      alt="" />
                    <p className=" pt-2 ">Floal Art Prints</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/single-frame.jpg"
                      alt="" />
                    <p className=" pt-2 ">Single Wall Frame</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/spiritual-image.jpg"
                      alt="" />
                    <p className=" pt-2 ">Spiritual Art Prints </p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* lamp-plant-banners */}
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
              <h1 className="text-xl font-bold text-[#9d6a37]">Lamp & Lights</h1>
              {/* Categories-Cards */}
              <div className="cards grid grid-cols-6 mt-4 gap-6 overflow-hidden">
                <div className="text-[0.9rem]">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/study-lamp.jpg"
                      alt="" />
                    <p className="pt-2 ">Study Lamps</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/night-lamp.jpg"
                      alt="" />
                    <p className=" pt-2 ">Night Lamps </p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/lights-banner.jpg"
                      alt="" />
                    <p className=" pt-2 ">Wall Scones</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/bulb-light.jpg"
                      alt="" />
                    <p className=" pt-2 ">Bulbs</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/ceiling-light.jpg"
                      alt="" />
                    <p className=" pt-2 ">Ceiling Lights</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/decorative-light.jpg"
                      alt="" />
                    <p className=" pt-2 ">Decorative Lights</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Category-4 */}
          <div className="mt-5">
            <div className="m-8">
              <h1 className="text-xl font-bold text-[#9d6a37]">Mirrors</h1>
              {/* Categories-Cards */}
              <div className="cards grid grid-cols-6 mt-4 gap-6 overflow-hidden">
                <div className="text-[0.9rem]">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/floor-mirror.jpg"
                      alt="" />
                    <p className="pt-2 ">Floor Mirrors</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/full-mirror.jpg"
                      alt="" />
                    <p className=" pt-2 ">Full Length Mirrors</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/led-mirror.jpg"
                      alt="" />
                    <p className=" pt-2 ">Led Mirrors</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="https://ii2.pepperfry.com/media/catalog/product/a/u/1600x1760/aurora-round-gold-mild-steel-decorative-wall-mirror-by-home4u-aurora-round-gold-mild-steel-decorativ-apuk6f.jpg"
                      alt="" />
                    <p className=" pt-2 ">Decorative Mirrors</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/wall-mirror.jpg"
                      alt="" />
                    <p className=" pt-2 ">Wall Mirrors</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/mirror-sets.jpg"
                      alt="" />
                    <p className=" pt-2 ">Mirror Sets</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Category-4 */}
          <div className="mt-5">
            <div className="m-8">
              <h1 className="text-xl font-bold text-[#9d6a37]">Showpieces</h1>
              {/* Categories-Cards */}
              <div className="cards grid grid-cols-6 mt-4 gap-6 overflow-hidden">
                <div className="text-[0.9rem]">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/wall-mask.jpg"
                      alt="" />
                    <p className="pt-2 ">Wall Masks</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/key-holders.jpg"
                      alt="" />
                    <p className=" pt-2 ">Key Holders</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/wall-art.jpg"
                      alt="" />
                    <p className=" pt-2 ">Wall Arts</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/ganesh-idol.webp"
                      alt="" />
                    <p className=" pt-2 ">Spiritual Scupltures</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/gift-set.jpg"
                      alt="" />
                    <p className=" pt-2 ">Gift Sets</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
                  </a>
                </div>
                <div className="text-[0.9rem] ">
                  <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                    <img class="object-fill w-[14rem] h-[14rem] border-solid 
                    transition duration-300 ease-in-out hover:scale-105"
                      src="assets/productimages/Figurine.jpg"
                      alt="" />
                    <p className=" pt-2 ">Figurines</p>
                    {/* <span className=""> 25+ Options, Explore Starting ₹9849 </span> */}
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
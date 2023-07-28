import React, {useState} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../public/assets/productimages/statue-finesse-1.jpg'
import image2 from '../../public/assets/productimages/statue-finesse-2.jpg'
import image3 from '../../public/assets/productimages/statue-finesse-3.jpg'
import image4 from '../../public/assets/productimages/statue-finesse-4.jpg'


const ProductCard = () => {

  const [images, setImages] = useState({
    image1, image2, image3, image4
  })

  const [activeImg, setActiveImage] = useState(images.image1)
  const [amount, setAmount] = useState(1);


  return (
      <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center max-w-7xl mx-auto p-8'>
          <div className='flex flex-col gap-6 lg:w-2/4'>
              <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
              <div className='flex flex-row justify-between h-24'>
                  <img src={images.image1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.image1)}/>
                  <img src={images.image2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.image2)}/>
                  <img src={images.image3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.image3)}/>
                  <img src={images.image4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.image4)}/>
              </div>
          </div>
          {/* ABOUT */}
          <div className='flex  flex-col gap-4 lg:w-2/4'>
              <div>
                  <span className=' text-emerald-300 font-semibold'>Wooden Statue</span>
                  <h1 className='text-3xl font-bold'>Statue Finesse</h1>
              </div>
              <p className='text-gray-700'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt non velit laborum voluptate alias recusandae nostrum ex ducimus esse, possimus quos magnam nihil inventore est in omnis debitis. Facere, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel, nihil, eligendi officiis debitis error magni quae, adipisci unde nostrum dolorem eveniet accusamus quia? Expedita vitae reiciendis tempora delectus aperiam!
              </p>
              <h6 className='text-2xl font-semibold'>$ 199.00</h6>
              <div className='flex flex-row items-center gap-12'>
                  <div className='flex flex-row items-center'>
                      <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                      <span className='py-4 px-6 rounded-lg'>{amount}</span>
                      <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                  </div>
                  <button className='bg-red-400 text-sm text-white font-semibold py-3 px-8 lg:px-16 lg:py-4 rounded-xl h-full'>Add to Cart</button>
              </div>
          </div>
      </div>
  );
};


export default ProductCard
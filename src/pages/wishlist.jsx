
// import Products from "../constants/wishlist.constants"

export default function Wishlist() {
  return (
    <>
    <div className='m-10 ml-24'>
      <h1 className='text-xl font-semibold'>My Wishlist(4 Items)</h1>
    </div>
        <div className='flex justify-around m-10 mb-36 relative'>
          <div className='w-[250px] h-[350px]'>
            <img className='h-[300px] w-[250px]' src="../assets/productimages/gift-set.jpg" alt="" />
            <div className='mb-2 text-center'>
              A Special collection of Gift Set
              <p className='font-semibold text-center mt-2 text-sm'>Rs. 999 <span className='line-through font-thin text-xs ml-2'> Rs. 1299</span> <span className='text-red-500'>(23% Off)</span></p>
            </div>
            <div className=' w-[250px]'>
              <button className='bg-teal-400 text-white mt-2 p-2 w-full border-teal-400 text-center hover:text-teal-400 hover:bg-white border-2'>Add to Cart</button>
            </div>
            <div className=' w-[250px]'>
            <button className='bg-red-400 text-white mb-5 mt-2 p-2 text-center w-full hover:text-red-400 hover:bg-white border-red-400 border-2'>Remove From Wishlist</button>
            </div>
          </div>
          <div className='w-[250px] h-[350px]'>
          <img className='h-[300px] w-[250px]' src="../assets/productimages/key-holders.jpg" alt="" />
          <div className='mb-2 text-center'>
              Handmade Key Holder
              <p className='font-semibold text-center mt-2 text-sm'>Rs. 532 <span className='line-through font-thin text-xs ml-2'> Rs. 759</span> <span className='text-red-500'>(30% Off)</span></p>
            </div>
          <div className=' w-[250px]'>
              <button className='bg-teal-400 text-white mt-2 p-2 w-full border-teal-400 text-center hover:text-teal-400 hover:bg-white border-2'>Add to Cart</button>
            </div>
            <div className=' w-[250px]'>
            <button className='bg-red-400 text-white mb-5 mt-2 p-2 text-center w-full hover:text-red-400 hover:bg-white border-red-400 border-2'>Remove From Wishlist</button>
            </div>
          </div>
          <div className='w-[250px] h-[350px]'>
          <img className='h-[300px] w-[250px]' src="../assets/productimages/vase-1.jpg" alt="" />
          <div className='mb-2 text-center'>
          Handpainted Matki Vase
              <p className='font-semibold text-center mt-2 text-sm'>Rs. 499 <span className='line-through font-thin text-xs ml-2'> Rs. 999</span> <span className='text-red-500'>(50% Off)</span></p>
            </div>
          <div className=' w-[250px]'>
              <button className='bg-teal-400 text-white mt-2 p-2 w-full border-teal-400 text-center hover:text-teal-400 hover:bg-white border-2'>Add to Cart</button>
            </div>
            <div className=' w-[250px]'>
            <button className='bg-red-400 text-white mb-5 mt-2 p-2 text-center w-full hover:text-red-400 hover:bg-white border-red-400 border-2'>Remove From Wishlist</button>
            </div>
          </div>
        
          <div className='w-[250px] h-[350px]'>
          <img className='h-[300px] w-[250px]' src="../assets/productimages/wall-mask.jpg" alt="" />
          <div className='mb-2 text-center'>
              Bamboo Naga Tribal Mask
              <p className='font-semibold text-center mt-2 text-sm'>Rs. 1499 <span className='line-through font-thin text-xs ml-2'> Rs. 1999</span> <span className='text-red-500'>(25% Off)</span></p>
            </div>
          <div className=' w-[250px]'>
              <button className='bg-teal-400 text-white mt-2 p-2 w-full border-teal-400 text-center hover:text-teal-400 hover:bg-white border-2'>Add to Cart</button>
            </div>
            <div className=' w-[250px]'>
            <button className='bg-red-400 text-white mb-5 mt-2 p-2 text-center w-full hover:text-red-400 hover:bg-white border-red-400 border-2'>Remove From Wishlist</button>
            </div>
          </div>
          
          {/* <div className='w-[300px] h-[350px] bg-slate-500'>
            <div className='flex absolute bottom-0 w-[300px]'>
              <button className='bg-white w-1/2 border-2'>Add to Cart</button>
              <button className='bg-black text-white w-1/2 h-10'>Buy Now</button>
            </div>
          </div>
          <div className='w-[300px] h-[350px] bg-slate-500'>
            <div className='flex absolute bottom-0 w-[300px]'>
              <button className='bg-white w-1/2 border-2'>Add to Cart</button>
              <button className='bg-black text-white w-1/2 h-10'>Buy Now</button>
            </div>
          </div> */}
          </div>
    </>
  )
}

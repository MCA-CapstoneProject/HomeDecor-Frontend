import React, {useState} from "react";

export default function cart() {
  const [amount, setAmount] = useState(1);
  return (
    <>
    
    
        <div>
              <div className='text-xl font-bold justify-center text-left ml-40 mt-10 mb-10'>Your Cart(1 Item) </div>
              <div className='bg-green-100 w-2/5 ml-40 mb-4 p-1 text-center'>
                <p className='text-green-500 font-semibold'>You Saved $300 On This Order.</p>
              </div>
            <div className='flex'>
              <div className='border-2 w-2/5 h-auto ml-40 mb-10'>
                <div className='flex'>
                    <div>
                        <div className=' h-48 w-48 m-5'>
                          <img src="../assets/productimages/wall-mirror.jpg" alt="product-image" />
                        </div>
                        
                        
                    </div>
                
                        <div className='mt-5'>
                                <p>Sculpted Wall Mirror</p>
                                <p className='text-slate-400'>By MegaArts from Decorica</p>
                                <div className='flex flex-row items-center'>
                                        <button className='bg-gray-200 px-3 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                                        <button className='bg-gray-200 px-3 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                                    </div>
                                {/* <div className='flex '>
                                <div>
                                <div className='mt-4'>MRP</div>
                                <div className='text-green-600 mb-2'>Item Discount</div>
                                <div className='font-semibold border-black border-t-2'>Item Price</div>
                                </div>
                                <div className='ml-20'>
                                <div className='mt-4'>$1299</div>
                                <div className='text-green-600 mb-2'>$300</div>
                                <div className='font-semibold border-black border-t-2'>$999</div>
                                </div>
                                </div> */}
                                <div className="flex my-8">
                                <div>
                                <button className='bg-teal-400 text-white ml-5 mt-2 p-2 w-30 border-teal-400 text-center hover:text-teal-400 hover:bg-white border-2 '>Move to Wishlist</button> 
                                </div>
                                <div>
                                <button className='bg-red-400 text-white ml-5 mb-5 mt-2 p-2 text-center w-30 hover:text-red-400 hover:bg-white border-red-400 border-2'>Delete</button>
                                </div>
                                </div>
                        </div>
                  </div> 
              </div>
              <div className='ml-5 w-2/5 h-auto float-right'>
                  {/* <div>
                    Delivering To <br />
                    <input className='border-2 w-[500px] h-12 mt-3 pl-4 outline-none' type="text " placeholder='Enter PIN Code' maxLength={6} />
                  </div> */}
                  {/* <div>
                  <input className='border-2 w-[500px] h-12 mt-3 outline-none pl-4 uppercase' placeholder='Apply Coupon' type="text " maxLength={6} />
                  </div> */}
                  <div className='border-2 w-[500px] h-auto'>
                    <h1 className='font-semibold text-center text-xl mt-3'>Cart Summary</h1>
                    <div className='flex'>
                                <div className='ml-3'>
                                <div className='mt-4'>Items in Cart</div>
                                <div className='mb-2'>Cart Total Price</div>
                                <div className='font-bold uppercase border-black border-t-2 mt-5'>You Pay</div>
                                <div className='text-green-600 font-semibold mb-2'>You Saved</div>
                                </div>
                                <div className='ml-60'>
                                <div className='mt-4'>1</div>
                                <div className='mb-2'>$999</div>
                                <div className='font-semibold mt-5 border-black border-t-2'>$999</div>
                                <div className='text-green-600 font-semibold mb-2'>$300</div>
                                </div>
                                </div>
                                
                  </div>
                  <button className='bg-red-400 w-[500px] border-2 border-red-400 text-white font-bold uppercase mt-3 p-5 hover:bg-transparent hover:text-[#111]'>Proceed To Checkout</button>
              </div>
      </div>
      
    </div>
    </>
  )
}

import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import {RiDeleteBinLine} from 'react-icons/ri'

function Checkout() {

    const [amount, setAmount] = useState(1);
    const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  return (
    <>
        <div className="container flex w-[90vw] h-auto mx-auto my-10 border-2 rounded-xl shadow-2xl scroll-x-none">
            <div className='grid my-10 w-2/3 justify-center'>
                <div className="left px-10 pt-5">
                    <h1 className='text-xl font-semibold mb-5'>Contact Information</h1>
                    <div className="grid">
                        <label htmlFor="email" className='mb-2'>Email</label>
                        <input type="email" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Enter Email' required/> 
                    </div>
                    <div className="grid mt-5">
                        <label htmlFor="number" className='mb-2'>Phone</label>
                        <input type="number" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Enter Phone' required/> 
                    </div>
                </div>
                <div className="left px-10">
                    <h1 className='text-xl font-semibold mt-5'>Shipping Address</h1>
                    <div className="grid">
                        <label htmlFor="text" className='mb-2 my-5'>Full Name</label>
                        <input type="text" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Enter Full Name' required/> 
                    </div>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2'>Address</label>
                        <input type="text" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Your Address' required/> 
                    </div>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2'>City</label>
                        <input type="text" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Your City' required/> 
                    </div>
                    <div className='flex'>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2'>Country</label>
                        <Select className='w-[200px]' options={options} value={value} onChange={changeHandler} />
                    </div>
                    <div className="grid mt-5 ml-10">
                        <label htmlFor="text" className='mb-2'>PIN Code</label>
                        <input type="textr" className='border-2 w-[200px] h-10 p-2 focus:outline-none' maxLength="6" placeholder='PIN Code' required/>
                    </div>
                    </div>
                </div>
            
            </div>
                    <div className='right flex-1 p-10'>
                        <div className='w-[500px] border h-auto rounded-xl shadow-2xl relative py-10'>

                        <div className='flex border-b-2'>
                            <div>
                                <div className=' h-32 w-32 m-5'>
                                <img src="../assets/productimages/wall-mirror.jpg" alt="product-image" />
                                </div>
                            </div>
                            <div className='mt-5'>
                                        <p>Sculpted Wall Mirror</p>
                                        <p className='text-slate-400'>By MegaArts from Decorica</p>
                                    {/* <div className='flex flex-row items-center'>
                                        <button className='bg-gray-200 px-3 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                                        <button className='bg-gray-200 px-3 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                                    </div> */}
                            </div>
                            <div className='text-red-400 h-5 text-xl mt-6 ml-14 cursor-pointer'><RiDeleteBinLine /></div>
                        </div> 
                        
                        <div className='mt-10 bg-[#e6e6e6] w-[90%] mx-auto rounded-2xl'>
                            <div className='flex justify-between py-2 px-10 border-b-2 border-white'>
                                <p className='font-semibold'>Shipping</p>
                                <p className='font-semibold'>$20</p>
                            </div>
                            <div className='flex justify-between py-2 px-10 border-b-2 border-white '>
                                <p className='font-semibold'>Discount</p>
                                <p className='font-semibold'>$400</p>
                            </div>
                            <div className='flex justify-between py-2 px-10'>
                                <p className='font-semibold'>Total</p>
                                <p className='font-semibold'>$2098</p>
                            </div>
                        </div>
                        <button className='flex justify-center items-center mx-auto mt-10 h-14 w-[90%] rounded-xl text-white font-semibold bg-red-400 border-2 border-red-400 hover:bg-transparent hover:text-red-400 '>Proceed To Pay $2098</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Checkout
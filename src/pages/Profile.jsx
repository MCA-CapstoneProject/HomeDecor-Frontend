import React, {useState, useMemo} from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function Profile() {

  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
    

  return (
    <>
    <div className="banner flex items-center text-gray-300 px-10 bg-[#34495E] select-none mt-10 h-48 rounded-2xl mx-10 shadow-2xl">
      <h1 className='text-4xl'>Hello User, Welcome Back</h1>
    </div>
    <div className="personal-info flex px-10 bg-white text-lg mx-10 rounded-2xl shadow-2xl py-10 mt-10">
      <div>
      <h1 className='text-4xl font-bold p-10'>Personal Information</h1>
        <form action="" className='grid px-10'>
          <label htmlFor="text" className='py-4 font-semibold'>First Name</label>
          <input type="text" className='py-4 w-[500px] focus:outline-none border-b-2' placeholder='Your First Name' />
          <label htmlFor="text" className='py-4 font-semibold'>Last Name</label>
          <input type="text" className='py-4 w-[500px] focus:outline-none border-b-2' placeholder='Your Last Name' />
          <label htmlFor="email" className='py-4 font-semibold'>Registered Email</label>
          <input type="email" className='py-4 w-[500px] focus:outline-none border-b-2' placeholder='Your Email' />
          <label htmlFor="number" className='py-4 font-semibold'>Registered Phone</label>
          <input type="number" className='py-4 w-[500px] focus:outline-none border-b-2' placeholder='Your Phone' />
          <button className='mt-10 py-2 px-5 bg-purple-500 text-white font-semibold border-2 border-purple-500 hover:bg-white hover:text-purple-500'>Save</button>
        </form>
        </div>
        <div>
          <img className='mt-32 w-[90%] select-none rounded-2xl shadow-2xl' src="https://cdn.dribbble.com/users/108637/screenshots/2971812/comp_1.gif" alt="gif" />
        </div>
    </div>
    <div className="orders px-10 bg-white text-lg mx-10 rounded-2xl shadow-2xl py-10 mt-10">
    <h1 className='text-4xl font-bold p-10'>Your Recent Orders</h1>
    <div className='flex justify-around items-center border-2 mx-20 my-2 rounded-2xl shadow-lg my-5 cursor-pointer'>
      <h1>Order ID #12345</h1>
      <p className='text-green-500 font-semibold '>Delivered</p>
      <div>
        <img className='h-20 w-16 my-4' src="../assets/productimages/study-lamp.jpg" alt="product" />
      </div>
    </div>
    <div className='flex justify-around items-center border-2 rounded-2xl shadow-lg mx-20 my-5 cursor-pointer'>
      <h1>Order ID #13968</h1>
      <p className='text-blue-500 font-semibold'>In Transit</p>
      <div>
        <img className='h-20 w-16 my-4' src="../assets/productimages/vase-1.jpg" alt="product" />
      </div>
    </div>
    <div className='flex justify-around items-center border-2 rounded-2xl shadow-lg mx-20 my-5 cursor-pointer'>
      <h1>Order ID #84543</h1>
      <p className='text-red-500 font-semibold'>Cancelled</p>
      <div>
        <img className='h-20 w-16 my-4' src="../assets/productimages/wall-mirror.jpg" alt="product" />
      </div>
    </div>
    </div>
    <div className='addresses px-10 bg-white text-lg mx-10 rounded-2xl shadow-2xl py-10 my-10'>
        <h1 className='text-4xl font-bold p-10'>Your Address</h1>
            <div className='flex'>
                <div>
                  <img className='h-[500px] rounded-2xl shadow-2xl' src="https://i.gifer.com/Jf0Z.gif" alt="address" />
                </div>
                <form action="">
                <div className='mx-10'>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2  font-semibold'>Address Line 1</label>
                        <input type="text" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Ex: Flat 101...' required/> 
                    </div>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2  font-semibold'>Address Line 2</label>
                        <input type="text" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Ex: James Street...' required/> 
                    </div>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2  font-semibold'>Landmark</label>
                        <input type="text" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Ex: Near Old Rail Road...' required/> 
                    </div>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2  font-semibold'>City</label>
                        <input type="text" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Your City' required/> 
                    </div>
                    <div className='flex'>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2  font-semibold'>Country</label>
                        <Select className='w-[230px]' options={options} value={value} onChange={changeHandler} />
                    </div>
                    <div className="grid mt-5 ml-10">
                        <label htmlFor="text" className='mb-2  font-semibold'>PIN Code</label>
                        <input type="textr" className='border-2 w-[230px] h-10 p-2 focus:outline-none' maxLength="6" placeholder='PIN Code' required/>
                    </div>
                    </div>
                    <button className='mt-10 py-2 px-5 w-[100%] bg-purple-500 text-white font-semibold border-2 border-purple-500 hover:bg-white hover:text-purple-500'>Save</button>
            </div>
            </form>
            
        </div>
    </div>
    </>
  )
}

export default Profile
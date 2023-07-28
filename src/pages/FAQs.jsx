import React from 'react'
import phoneImage from '../../public/assets/designimages/phone.png'
import packageImage from '../../public/assets/designimages/package.png'
import priceImage from '../../public/assets/designimages/price.png'
import cancelImage from '../../public/assets/designimages/cancel.png'
import contactImage from '../../public/assets/designimages/contact.png'

function FAQs() {
  return (
    <div>
      <h1 className='bg-gray-200 p-10 mx-20 mt-10 text-center text-4xl font-semibold'>How Can We Help You?</h1>
      <div>
        <p className='bg-gray-100 p-5 mx-20 my-5'><span className='font-semibold'>Tip:</span> You can order quickly and easily through Decorica.com, We accept and delive orders within India and Slect International locations. For more Information connect with our Customer Agent. You must be at least 13 years old to make a purchase from this site.</p>
      </div>
      <div className='bg-gray-100 p-10 mx-20 mb-5'>
        <h2 className='text-2xl text-center font-semibold tracking-wider'>Need Help?</h2>
        <div className='flex justify-around mt-5'>
          <div className='flex bg-white p-8'>
              <div className='leading-10'>
                <p className='font-semibold'>Track Your Order?</p>
                <a className='text-gray-700 underline hover:text-red-500' href="#">Get Started</a>
              </div>
              <div>
                <img className='h-36 w-44' src={phoneImage} alt="" />
              </div>
          </div>
          <div className='flex bg-white p-8'>
              <div className='leading-10 w-48'>
                <p className='font-semibold'>Make A Return?</p>
                <a className='text-gray-700 underline hover:text-red-500' href="#">Get Started</a>
              </div>
              <div>
                <img className='h-36 w-24' src={packageImage} alt="" />
              </div>
          </div>
          <div className='flex bg-white p-8'>
              <div className='leading-10'>
                <p className='font-semibold'>Request A Price <br /> Adjustment?</p>
                <a className='text-gray-700 underline hover:text-red-500' href="#">Get Started</a>
              </div>
              <div>
                <img className='h-36 w-48' src={priceImage} alt="" />
              </div>
          </div>
        </div>
      </div>
      <div className='flex gap-10 p-10 mx-20 bg-gray-100 mb-10'>
          <div className='flex bg-white w-2/3 p-8'>
              <div className=''>
                <p className=' text-xl font-semibold leading-10'>Need To Cancel A Recent Order?</p>
                <p><span className='font-semibold'>If you act Quickly</span>, You can cancel a recent order while it is in the prcessing stage. You need to o to the order section in your profile an then go to the respective details section and then click on Cancel.</p>
                <a className='text-gray-700 underline hover:text-red-500' href="#">Get Started</a>
              </div>
              <div>
                <img className='h-48 w-96' src={cancelImage} alt="" />
              </div>
          </div>
          <div className='flex bg-white w-1/3 p-8'>
            <div className=''>
              <h3 className='font-semibold text-xl leading-10'>Need Help? We are here 24/7</h3>
              <p><span className='font-bold'>India</span> - 1800 123 123</p>
              <a className='underline hover:text-red-500' href="#"> Chat</a>
              <p><span className='font-bold'>International</span> - 1888 282 6060</p>
              <a className='underline hover:text-red-500' href="#"> Chat</a>
            </div>
            <div>
              <img className='h-40' src={contactImage} alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default FAQs
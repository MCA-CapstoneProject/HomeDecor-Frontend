import React from 'react'
import cancelImage from '../../public/assets/designimages/cancel.png'
import contactImage from '../../public/assets/designimages/contact.png'

function FAQs() {
  return (
    <div>
      <h1 className='bg-gray-200 p-10 mx-20 mt-10 text-center text-4xl font-semibold'>Frequently Asked</h1>
      <div>
        <p className='bg-gray-100 p-5 mx-20 my-5'><span className='font-semibold'>Tip:</span> You can order quickly and easily through Decorica.com, We accept and delive orders within India and Slect International locations. For more Information connect with our Customer Agent. You must be at least 13 years old to make a purchase from this site.</p>
      </div>
      <div className='bg-gray-100 p-10 mx-20 mb-5'>
        <h2 className='text-2xl leading-10 font-semibold tracking-wider'>Quick Assists</h2>
        <p className='leading-10'>Answers to our most frequently asked questions are just one click away.
For the latest shipping, order, return, and store information, please <a className='hover:text-red-500' href="">click here</a>.</p>
        <div className='flex gap-10 justify-around text-sm mt-5'>
          <div className='flex  w-1/3 bg-white p-8'>
              <div className=''>
                <p className='font-semibold leading-10 text-xl'>Dispatch & Delivery</p>
                <p>How do I get free delivery on Decorica.com? <br /> What are Decorica.com's delivery options? <br /> LATEST SHIPPING INFORMATION</p>
                <a className='text-gray-700 underline hover:text-red-500' href="#">Get Started</a>
              </div>
          </div>
          <div className='flex  w-1/3 bg-white p-8'>
              <div className=''>
                <p className='font-semibold leading-10 text-xl'>Returns</p>
                <p>How do I return my Decorica.com order? <br /> What is Decorica's returns policy? <br /> Where is my refund? <br />
LATEST RETURN INFORMATION</p>
                <a className='text-gray-700 underline hover:text-red-500' href="#">Get Started</a>
              </div>
          </div>
          <div className='flex  w-1/3 bg-white p-8'>
              <div className=''>
                <p className='font-semibold leading-10 text-xl'>Decorica Plus</p>
                <p>What is DecoricaPlus Membership? <br />
How do I create a Decorica Member profile? <br />
How do I get the most out of DRC and DTC?</p>
                <a className='text-gray-700 underline hover:text-red-500' href="#">Get Started</a>
              </div>
          </div>
        </div>
        <div className='flex gap-10 justify-around text-sm mt-5'>
          <div className='flex w-1/3 bg-white p-8'>
              <div className=''>
                <p className='font-semibold leading-10 text-xl'>Orders</p>
                <p>How do I track my Decorica.com order status? <br /> Can I change or cancel my Decorica.Com order? <br /> Does Decorica offer a student discount? <br /> What payment options can I use on Decorica.com? <br /> LATEST ORDER INFORMATION</p>
                <a className='text-gray-700 underline hover:text-red-500' href="#">Get Started</a>
              </div>
          </div>
          <div className='flex w-1/3 bg-white p-8'>
              <div className=''>
                <p className='font-semibold leading-10 text-xl'>Product Info</p>
                <p>How do I clean my Decorica frames, artifacts or mirrors? How do I find the right size and fit? <br />
What is the Decorica By You personalisation policy? <br /> How do I get Decorica's newest Artifacts releases?</p>
                <a className='text-gray-700 underline hover:text-red-500' href="#">Get Started</a>
              </div>
          </div>
          <div className='flex w-1/3 bg-white p-8'>
              <div className=''>
                <p className='font-semibold leading-10 text-xl'>Corporate</p>
                <p>Where can I learn more about Decorica, Inc.? <br /> Where is the Decorica store closest to me?</p>
                <a className='text-gray-700 underline hover:text-red-500' href="#">Get Started</a>
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
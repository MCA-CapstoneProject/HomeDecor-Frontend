import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { authState } from "../features/authenticate/authSlice";
import { getHeaders } from "../../config";
import { Link } from "react-router-dom";

export default function cart() {
  const [amount, setAmount] = useState(1);
  const { userId } = useSelector(authState);
  const [cartproducts, setCartProducts] = useState([]);

  async function removeCartProducts(cartId) {
    await axios.delete(`http://localhost:8082/secured/product/deleteCart?cartId=${cartId}`,
    getHeaders()
    )
      .then((response) => {
        console.log(response.data);
        // setWishlistproducts(response.data);
        // console.log(wishlistproducts);
        console.log('item deleted from cart success!');

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {

    async function fetchCartProducts() {
      await axios.get("http://localhost:8082/secured/product/getCart?userId=" + parseInt(userId),
      getHeaders()
      )
        .then((response) => {
          console.log(response.data);
          setCartProducts(response.data);
          console.log(cartproducts);

        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    fetchCartProducts();

  }, [])

  return (
    <>
    {(cartproducts.length==0 ? (
      <>
      <div className="m-10 ml-24">
        <h2 className="text-xl font-medium py-8">Your Cart Is Empty </h2>
        <Link to="/shop">
        Add Some Product To Cart
        </Link>
      </div>
      </>
    ): (
      <div>
        <div className='text-xl font-bold justify-center text-left ml-40 mt-10 mb-10'>Your Cart </div>
        <div className='bg-green-100 w-2/5 ml-40 mb-4 p-1 text-center'>
          <p className='text-green-500 font-semibold'>You Saved $300 On This Order.</p>
        </div>
        <div className='flex'>
          <div className='border-2 w-2/5 h-auto ml-40 mb-10'>
          {cartproducts && cartproducts.map((item, idx) => {
          return (
            <div key={idx} className='flex'>
              <div>
                <div className=' h-48 w-48 m-5'>
                  <img src={item.productMasterDto.imagePath} alt="product-image" />
                </div>
              </div>
              <div className='mt-5'>
                <p>{item.productMasterDto.productName}</p>
                <p className='text-slate-400'>{item.productMasterDto.brandDto.brandName}</p>
                <div className='flex flex-row items-center'>
                  <button className='bg-gray-200 px-3 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                  <span className='py-4 px-6 rounded-lg'>{amount}</span>
                  <button className='bg-gray-200 px-3 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                </div>
                <div className="flex my-8">
                  <div>
                    <button className='bg-teal-400 text-white ml-5 mt-2 p-2 w-30 border-teal-400 text-center hover:text-teal-400 hover:bg-white border-2 '>Move to Wishlist</button>
                  </div>
                  <div>
                    <button onClick={() => removeCartProducts(item.cartId)}
                    className='bg-red-400 text-white ml-5 mb-5 mt-2 p-2 text-center w-30 hover:text-red-400 hover:bg-white border-red-400 border-2'>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ) 
          })}
          </div>
          {/* Price Column */}
          <div className='ml-5 w-2/5 h-auto float-right'>
          {cartproducts && cartproducts.map((item, idx) => {
          return (
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
                  <div className='mt-4'>{cartproducts.length}</div>
                  <div className='mb-2'>Rs.{item.productMasterDto.discountPrice}</div>
                  <div className='font-semibold mt-5 border-black border-t-2'>Rs.{item.productMasterDto.discountPrice}</div>
                  <div className='text-green-600 font-semibold mb-2'>Rs.399</div>
                </div>
              </div>
            </div>
          ) })}
            <button className='bg-red-400 w-[500px] border-2 border-red-400 text-white font-bold uppercase mt-3 p-5 hover:bg-transparent hover:text-[#111]'>Proceed To Checkout</button>
          </div>
        </div>
      </div>   
      )
    )}
    </>
  )
}

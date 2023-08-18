import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { authState } from "../features/authenticate/authSlice";
import { getHeaders } from "../../config";
import { Link } from "react-router-dom";

export default function Cart() {
  const { userId } = useSelector(authState);
  const [cartproducts, setCartProducts] = useState([]);

  //remove from cart
  async function removeCartProducts(cartId) {
    await axios.delete(`http://localhost:8082/secured/product/deleteCart?cartId=`+parseInt(cartId),
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

  async function updateQuantity(id, newQuantity) {
    await axios.post("http://localhost:8082/secured/product/updateCart",
    { cartId: parseInt(id),
      quantity:newQuantity
    },
    getHeaders()
    )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //fetch cart products
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

  useEffect(() => {
    fetchCartProducts();
  }, [])


  const decrement = (id, quantity) =>{
    const amount = quantity -1 >0 && quantity-1
    updateQuantity(id,amount);
  }
  const increment = (id, quantity, productQuantity) =>{
    const amount = quantity +1 <= productQuantity && quantity+1
    updateQuantity(id,amount);
  }

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
                  <button className='bg-gray-200 px-3 rounded-lg text-violet-800 text-3xl' onClick={() => decrement(item.cartId, item.quantity)}>-</button>
                  <span className='py-4 px-6 rounded-lg'>{item.quantity}</span>
                  <button className='bg-gray-200 px-3 rounded-lg text-violet-800 text-3xl' onClick={() => increment(item.cartId,item.quantity,item.productMasterDto,)}>+</button>
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
          <div className='border-2 w-[500px] h-auto'>
              <h1 className='font-semibold text-center text-xl mt-3'>Cart Summary</h1>
              <table className="flex flex-col space-y-4 w-full p-4">
                <thead className="bg-gray-100 rounded-mg p-2 px-4">
                  <tr className="grid grid-cols-3 text-start">
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody className="px-4">
                  {cartproducts && cartproducts.map((item,idx)=>{
                    return(
                      <tr key={idx} className="grid grid-cols-3 text-center">
                        <td className="col-span-1">{item.productMasterDto.productName}</td>
                        <td>{item.quantity}</td>
                        <td>{item.productMasterDto.discountPrice}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <div className="flex justify-between p-6 font-bold text-xl">
                <h1>Total Price</h1>
                <h1 className="text-green-500">Rs. 0000</h1>
              </div>
            <button className='bg-red-400 w-[500px] border-2 border-red-400 text-white font-bold uppercase mt-3 p-5 hover:bg-transparent hover:text-[#111]'>Proceed To Checkout</button>
          </div>
        </div>
        </div>
      </div>   
      )
    )}
    </>
  )
}

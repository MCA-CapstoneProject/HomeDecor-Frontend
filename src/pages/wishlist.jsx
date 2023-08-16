import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authState } from "../features/authenticate/authSlice";

export default function Wishlist() {
  const { userId } = useSelector(authState);
  const [wishlistproducts, setWishlistproducts] = useState([]);

  async function removeWishlistProducts(productid) {
    await axios
      .delete(
        `http://localhost:8082/product/deleteWishlistProduct?productId=${productid}`
      )
      .then((response) => {
        console.log(response.data);
        // setWishlistproducts(response.data);
        // console.log(wishlistproducts);
        console.log("item deleted from wishlist success!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    async function fetchWishlitProducts() {
      await axios
        .get(
          "http://localhost:8082/product/getWishlistProduct?userId=" +
            parseInt(userId)
        )
        .then((response) => {
          console.log(response.data);
          setWishlistproducts(response.data);
          console.log(wishlistproducts);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    fetchWishlitProducts();
  }, []);

  return (
    <>
      <div className="m-10 ml-24">
        <h1 className="text-xl font-semibold">My Wishlist( Items)</h1>
      </div>
      <div className="grid grid-cols-3 justify-around m-10 mb-[20rem] relative">
        {wishlistproducts &&
          wishlistproducts.map((item, idx) => {
            return (
              <div key={idx} className="w-[250px] h-[350px]">
                <img
                  className="h-[300px] w-[250px]"
                  src={item.product.imagePath}
                  alt=""
                />
                {/* <span>{item.product.productId}</span> */}
                <div className="mb-2 text-center">
                  {item.product.productName}
                  <p className="font-semibold text-center mt-2 text-sm">
                    Rs.{item.product.discountPrice}{" "}
                    <span className="line-through font-thin text-xs ml-2">
                      Rs.{item.product.price}
                    </span>{" "}
                    <span className="text-red-500">(23% Off)</span>
                  </p>
                </div>
                <div className=" w-[250px]">
                  <button className="bg-teal-400 text-white mt-2 p-2 w-full border-teal-400 text-center hover:text-teal-400 hover:bg-white border-2">
                    Add to Cart
                  </button>
                </div>
                <div className=" w-[250px]">
                  <button
                    onClick={() =>
                      removeWishlistProducts(item.product.productId)
                    }
                    className="bg-red-400 text-white mb-5 mt-2 p-2 text-center w-full hover:text-red-400 hover:bg-white border-red-400 border-2"
                  >
                    Remove From Wishlist
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

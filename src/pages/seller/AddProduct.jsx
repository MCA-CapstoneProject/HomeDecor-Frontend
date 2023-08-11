import { useState, useRef } from "react";
import axios from "axios";
import { getHeaders } from "../../../config";

function AddProduct() {
  const formRef = useRef(null);
  const [base64Image, setbase64Image] = useState("");
  const apiUrl = "http://localhost:8082/secured/product/add";

  const handleFileChange = (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageDataURL = event.target.result;
      setbase64Image(imageDataURL);
    };
    reader.readAsDataURL(event.target.files[0]); 
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      "productName": formData.get("prod_name"),
      "description": formData.get("prod_desc"),
      "ratings": formData.get("prod_rating"),
      "productCode": formData.get("prod_code"),
      "price": formData.get("prod_price"),
      "imagePath" :base64Image,
      "quantity" : formData.get("prod_quantity"),
      "size" : formData.get("prod_size"),
      "brandId": {
        "brandId": formData.get("prod_brand")
      },
      "categoryId": {
        "categoryId": formData.get("prod_category")
      }
    }
    await axios
      .post(apiUrl, payload, getHeaders())
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
    if (formRef.current) {
        formRef.current.reset();
        setbase64Image(null);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form ref={formRef} onSubmit={handleSubmit} className="grid w-2/5">
      <input name="prod_code"
          className="outline-none border-b-2 text-gray-500"
          type="text"
          placeholder="Enter Product Code"
        />

        <input name="prod_name"
          className="outline-none mt-8 border-b-2 text-gray-500"
          type="text"
          placeholder="Enter Product Name"
        />
        <input name="prod_desc"
          className="outline-none border-b-2 mt-8 text-gray-500"
          type="textarea"
          placeholder="Enter Product Details"
        />
        <span className="flex justify-between">
        <input name="prod_rating"
          className="outline-none border-b-2 mt-8 text-gray-500"
          type="text"
          placeholder="Enter Ratings from(1-5)"
        />
        <div className="text-gray-500 mt-8 border-b-2">
        <input name="prod_price"
          className="outline-none mt-8 border-b-2 text-gray-500"
          type="text"
          placeholder="Enter Product Price"
        />
        </div>
        </span>
        <span className="flex justify-between">
        <select  name="prod_category" className="form-select outline-none text-gray-400 border-b-2 mt-8">
        <option selected value="0">
            Enter Category Name
          </option>
          <option value="1">Plant Decoration</option>
          <option value="2">Art and Frames</option>
          <option value="3">Interior Lightings</option>
          <option value="4">Mirrors</option>
          <option value="5">Show Pieces</option>
        </select>
        <select  name="prod_brand" className="form-select outline-none text-gray-400 border-b-2 mt-8">
          <option selected value="0">
            Enter Brand Name
          </option>
          <option value="3">vdjvh</option>
          <option value="4">veach</option>
          <option value="7">dbvh</option>
          <option value="8">fhiugr</option>
          <option value="9">kakndu</option>
        </select>
        </span>
        <span className="flex justify-between">
        <select name="prod_quantity" className="form-select outline-none text-gray-400 border-b-2 mt-8">
          <option selected value="0">
            Enter Quantity
          </option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="60">60</option>
          <option value="80">80</option>
          <option value="100">100</option>
        </select>
        <select name="prod_size" className="form-select outline-none text-gray-400 border-b-2 mt-8">
          <option selected value="Enter Size">
            Enter Size
          </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra-large">Extra Large</option>
        </select>
        </span>
         <input
            className="outline-none border-b-2 mt-8 text-gray-500"
            id="dropzone-file"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <img src={base64Image} alt="Upload right format of image to display here..."/>
        <br/><br/>
        <button className="bg-emerald-500 my-8 text-lg rounded-xl float-right px-10 py-2" type="Submit" value="submit">Submit</button>
      </form> 
    </div>
  );
}

export default AddProduct;

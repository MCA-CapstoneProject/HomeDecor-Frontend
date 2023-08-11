import { useState } from "react"
import { getHeaders } from "../../../config"
import axios from "axios";

export default function Profile() {
    const [productImages, setProductImages] = useState(); 
   
   async function getProd(){

        await axios.get("http://localhost:8082/secured/product/getAllProduct", getHeaders())
        .then((response) => {
            setProductImages(response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        }

       const handleDisplay= () =>{
        getProd();
       }

    return (
    <div>
        <button onClick={handleDisplay}>ON CLICK DISPLAY IMAGES</button>
      {productImages && productImages.map((item)=>{
        return(
            <>
            <img src={item.imagePath} alt="images"/>
            </>
            
        )
        
      })}
    </div>
  )
}

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Authentication from "./Authentication.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  // async function apiCall(){
  //   await axios.get('http://localhost:8082/user/getAllUsers')
  //   .then(response => {
  //     setPosts(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   })
  // }
  // apiCall();
  // console.log(posts);

  
  return (
    <BrowserRouter>
      {/* <Security {...oktaConfig}> */}
       <Authentication></Authentication>
      {/* </Security> */}
    </BrowserRouter>
  );
};

export default App;

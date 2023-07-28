import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Authentication from "./Authentication.jsx";

<<<<<<< HEAD
import { useState, useEffect } from "react";
import ProductCard from "./pages/ProductCard";
=======
>>>>>>> f70c82853a417602e7aa23b7ed66001c6fbbdeac

const App = () => {

  return (
    <BrowserRouter>
      {/* <Security {...oktaConfig}> */}
       <Authentication></Authentication>
      {/* </Security> */}
    </BrowserRouter>
  );
};

export default App;

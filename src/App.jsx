import "./App.css";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Layout from "./components/ui/Layout";
import Login from './pages/Login'
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
// import { Security } from "@okta/okta-react";
// import  oktaConfig  from './oktaConfig'

const App = () => {

  return (
    <BrowserRouter>
    {/* <Security {...oktaConfig}> */}
    <Layout>   
      <Routes>      
        <Route path="/wishlist" exact element={<Wishlist />}/>
        <Route path="/cart" exact element={<Cart />}/>
        <Route path="/login" exact element={<Login />}/>
        <Route path="/register" exact element={<Register />}/>
        <Route path="/reset-password" exact element={<ForgotPassword />}/>
      </Routes>    
      </Layout>
    {/* </Security> */}
    </BrowserRouter>

  );
}

export default App;

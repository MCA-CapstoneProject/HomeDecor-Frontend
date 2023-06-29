import "./App.css";
import {Routes, Route, useLocation} from "react-router-dom";
import Layout from "./components/ui/Layout";
import Login from './pages/Login'
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
    const location = useLocation();

  return (
  
    <>
    <Layout />   
      <Routes>      
        {location.pathname === <Login/>}
        <Route path="/register" exact element={<Register />}/>
        <Route path="/reset-password" exact element={<ForgotPassword />}/>
      </Routes>    
    </>

  );
}

export default App;

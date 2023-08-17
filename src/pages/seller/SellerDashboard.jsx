import { useEffect } from "react";
import ProductTable from "../../components/ui/seller/ProductTable";
import Cards from "../../components/ui/seller/cards";
import { setAuthUsername } from "../../helper/Auth.helper";

function SellerDashboard() {

  useEffect(()=>{
    setAuthUsername(sessionStorage.getItem('uname'))
    console.log(sessionStorage.getItem('uname'))
  },[])
  
  return (
    <>
        {/* Main content area */}
        <h1 className="font-semibold text-2xl">Dashboard Overview</h1>
        <Cards/><br/>
        <h1 className="font-semibold text-xl">List</h1>
        <ProductTable/>
    </>
  );
}

export default SellerDashboard;

import ProductTable from "../../components/ui/seller/ProductTable";
import Cards from "../../components/ui/seller/cards";

function SellerDashboard() {
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

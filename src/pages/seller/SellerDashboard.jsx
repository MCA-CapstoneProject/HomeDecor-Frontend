import Layout2 from "../../components/ui/seller/Layout2";
import ProductTable from "../../components/ui/seller/ProductTable";
import Cards from "../../components/ui/seller/cards";

function SellerDashboard() {
  return (
    <Layout2>
        {/* Main content area */}
        <h1 className="font-semibold text-2xl">Dashboard Overview</h1>
        <Cards/><br/>
        <h1 className="font-semibold text-xl">List</h1>
        <ProductTable/>
    </Layout2>
  );
}

export default SellerDashboard;

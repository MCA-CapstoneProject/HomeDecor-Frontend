import { Auth0Provider } from "@auth0/auth0-react";
import { usePublicRoutes } from "./helper/PublicRoute";
import Layout from "./components/ui/Layout";
import Layout2 from "./components/ui/seller/Layout2";
import { Routes, Router, Route  } from "react-router-dom";
import { ROUTES_ARR } from "./constants/routes.constants";
import SuspenseWrapper from "./lib/utils/routing/SuspenseWrapper";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/cart";
import SellerDashboard from "./pages/seller/SellerDashboard";
import AddProduct from "./pages/seller/AddProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Authentication = () => {
  const domain = "dev-72e1ark1yfj8hz53.us.auth0.com";
  const clientId = "aOghGIpqsYAVtv3HzCXATZXXDBgWMJGn";
  //const audience = 'YOUR_AUTH0_API_IDENTIFIER';
  const redirectUri = window.location.origin;
  const isPublicRoute = usePublicRoutes();
  return (
    <>
      {!isPublicRoute ? (
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={redirectUri}
          //  audience={audience}
        >
          <Layout>
            <Routes>
              {ROUTES_ARR.map((item, idx) => (
                <Route
                  key={idx}
                  path={item.path}
                  element={
                    <SuspenseWrapper>
                      <item.component />
                    </SuspenseWrapper>
                  }
                />
              ))}
              <Route element={NotFound} />
              <Route path="/wishlist" exact element={<Wishlist />} />
              <Route path="/cart" exact element={<Cart />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/Register" exact element={<Register />} />
            </Routes>
          </Layout>
        </Auth0Provider>
      ):
      <Layout2>
      <Routes>
        <Route
          path="/seller-dashboard"
          exact
          element={
            <SuspenseWrapper>
              <SellerDashboard />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/seller-dashboard/shop"
          element={
            <SuspenseWrapper>
            
            </SuspenseWrapper>
          }
        />
        <Route
          path="/seller-dashboard/add-product"
          element={
            <SuspenseWrapper>
              <AddProduct />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/seller-dashboard/profile"
          exact
          element={
            <SuspenseWrapper>
              <h1>PROFILE OF SELLER</h1>
            </SuspenseWrapper>
          }
        />
      </Routes>
    </Layout2>
      }
    </>
  );
};

export default Authentication;

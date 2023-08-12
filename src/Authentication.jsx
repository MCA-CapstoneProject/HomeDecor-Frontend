import { Auth0Provider } from "@auth0/auth0-react";
import { useAdminRoutes, usePublicRoutes } from "./helper/PublicRoute";
import Layout from "./components/ui/Layout";
import Layout2 from "./components/ui/seller/Layout2";
import { Routes, Route } from "react-router-dom";
import { ROUTES_ARR } from "./constants/routes.constants";
import SuspenseWrapper from "./lib/utils/routing/SuspenseWrapper";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/cart";
import SellerDashboard from "./pages/seller/SellerDashboard";
import AddProduct from "./pages/seller/AddProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Plantdecor from "./pages/categories/Plantdecor";
import Adminlayout from "./components/ui/admin/Adminlayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProductsList from "./pages/admin/ProductsList";
import SellersList from "./pages/admin/SellersList";
import CustomersList from "./pages/admin/CustomersList";
import OrdersList from "./pages/admin/OrdersList";
import AddUserForm from "./pages/admin/AddUserForm";
import ViewUser from "./pages/admin/ViewUser";
import Profile from "./pages/seller/Profile";


const Authentication = () => {
  const domain = "dev-72e1ark1yfj8hz53.us.auth0.com";
  const clientId = "aOghGIpqsYAVtv3HzCXATZXXDBgWMJGn";
  //const audience = 'YOUR_AUTH0_API_IDENTIFIER';
  const redirectUri = window.location.origin;
  const isPublicRoute = usePublicRoutes();
  const isAdminRoute = useAdminRoutes();

  return (
    <>
      {!isPublicRoute && !isAdminRoute ? (
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={redirectUri}
          //  audience={audience}
        >
          {(window.location.pathname.includes("/login") || window.location.pathname.includes("/Register")) ? (
            <Routes>
              <Route path="/login" exact element={<Login />} />
              <Route path="/Register" exact element={<Register />} />
            </Routes>
          ) : (
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
                <Route
                  path="/shop/plant-decor"
                  exact
                  element={<Plantdecor />}
                />
                <Route path="/profile" exact element={<Profile/>} />
            </Routes>
            </Layout>
          )}
        </Auth0Provider>
      ) : isAdminRoute ? (
        <Adminlayout>
          <Routes>
            <Route
              path="/admin-dashboard"
              exact
              element={
                <SuspenseWrapper>
                  <AdminDashboard />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/admin-dashboard/sellers"
              element={
                <SuspenseWrapper>
                  <SellersList />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/admin-dashboard/customers"
              element={
                <SuspenseWrapper>
                  <CustomersList />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/admin-dashboard/products"
              exact
              element={
                <SuspenseWrapper>
                  <ProductsList />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/admin-dashboard/orders"
              exact
              element={
                <SuspenseWrapper>
                  <OrdersList />
                </SuspenseWrapper>
              }
            />
            <Route
              path="/admin-dashboard/adduser"
              exact
              element={<AddUserForm />}
            />
            <Route
              path="/admin-dashboard/viewuser/:userId"
              exact
              element={<ViewUser />}
            />
          </Routes>
        </Adminlayout>
      ) : (
        <>
          {(window.location.pathname.includes("/seller-dashboard/login") || window.location.pathname.includes("/seller-dashboard/Register")) ? (
            <Routes>
              <Route
                path="/seller-dashboard/login"
                exact
                element={
                  <SuspenseWrapper>
                    <Login />
                  </SuspenseWrapper>
                }
              />
              <Route
                path="/seller-dashboard/Register"
                exact
                element={
                  <SuspenseWrapper>
                    <Register />
                  </SuspenseWrapper>
                }
              />
            </Routes>
          ) : (
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
                      <ProductsList />
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
                      <Profile/>
                    </SuspenseWrapper>
                  }
                />
              </Routes>
            </Layout2>
          )}
        </>
      )}
    </>
  );
};

export default Authentication;

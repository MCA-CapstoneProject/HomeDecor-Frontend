import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Shop = React.lazy(() => import("../pages/Shop"));
const Blog = React.lazy(() => import("../pages/Blogs"));
const About = React.lazy(() => import("../pages/About"));
const FAQs = React.lazy(() => import("../pages/FAQs"));
const Products = React.lazy(() => import('../pages/Products'));

export const ROUTES_ARR = [
    { name: "Home", component: Home, path: "/" },
    { name: "Shop", component: Shop, path: "/shop" },
    { name: "Blog", component: Blog, path: "/blog" },
    { name: "About", component: About, path: "/about" },
    { name: "FAQs", component: FAQs, path: "/faqs" },
    // { name: "Products", component: Products, path: "/products" },
]
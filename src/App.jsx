import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import Header from "./components/Base/Header";
import Footer from "./components/Base/Footer";
import ProductGrid from "./components/Base/ProductGrid";
import New from "./components/Base/New";
import Profile from "./components/Login/Profile";
import Create from "./components/Login/Create";
import Product1 from "./components/Product/product1";
import Product2 from "./components/Product/product2";
import Product3 from "./components/Product/product3";
import Product4 from "./components/Product/product4";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/new_shop" element={<New />} />
          <Route path="/products/Iphone_16" element={<Product1 />} />
          <Route path="/products/Macbook_pro" element={<Product2 />} />
          <Route path="/products/Airpods_pro_2" element={<Product3 />} />
          <Route path="/products/Apple_watch_series_10" element={<Product4 />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

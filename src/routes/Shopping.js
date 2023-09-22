import React from "react";
import { Route, Routes } from "react-router-dom";

import { ProductDetailProvider } from "../context/ProductDetailContext";

import ProductDetail from "./../pages/shop/ProductDetail";
import Order from "./../pages/shop/Order";
import OrderDetail from "./../components/shop/OrderDetail";
import CartList from "./../pages/shop/CartList";
import WishList from "./../pages/shop/WishList";
import ProductCreate from "./../pages/shop/ProductCreate";
import ProductUpdate from "./../pages/shop/ProductUpdate";
import Coupon from "../pages/shop/Coupon";
import ProductListPage from './../pages/shop/ProductListPage';

const Shopping = () => {
  return (
    <div style={{margin: '0 10%'}}>
      <ProductDetailProvider>
        <Routes>
          <Route path="/shopping" element={<ProductListPage />} />
          <Route path="/shopping/:pageNum" element={<ProductListPage />} />
          <Route path="/shopping/search/:keyword" element={<ProductListPage />} />
          <Route path="/shopping/search/:keyword/:pageNum" element={<ProductListPage />} />

          <Route path="/shopping/category/:categoryId" element={<ProductListPage />} />
          <Route path="/shopping/category/:categoryId/:pageNum" element={<ProductListPage />} />
          <Route path="/shopping/category/:categoryId/search/:keyword" element={<ProductListPage />} />
          <Route path="/shopping/category/:categoryId/search/:keyword/:pageNum" element={<ProductListPage />} />

          <Route path="/shopping/products/:productNum" element={<ProductDetail />} />
          <Route path="/shopping/create" element={<ProductCreate />} />
          <Route path="/shopping/update/:productNum" element={<ProductUpdate />} />

          <Route path="/shopping/order" element={<Order />} />
          <Route path="/shopping/order/detail" element={<OrderDetail />} />

          {/* 추후 마이페이지로 옮기기! */}
          <Route path="/shopping/cart" element={<CartList />} />
          <Route path="/shopping/wishlist" element={<WishList />} />

          <Route path="/shopping/sort/:sortType" element={<ProductListPage />} />
          <Route path="/shopping/sort/:sortType/:pageNum" element={<ProductListPage />} />
          <Route path="/shopping/category/:categoryId/sort/:sortType" element={<ProductListPage />} />
          <Route path="/shopping/category/:categoryId/sort/:sortType/:pageNum" element={<ProductListPage />} />

          <Route path="/coupon" element={<Coupon />} />
        </Routes>
      </ProductDetailProvider>
    </div>
  );
};

export default Shopping;

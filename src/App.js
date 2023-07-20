import React from "react";
import './app.css'
import { Route, Routes, Navigate} from "react-router-dom";

//component
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

//context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

 function App() {

    return (
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path='/products' element={<Store />} />
            <Route path='/Cart' element={<ShopCart />} />
            <Route path="/*" element={<Navigate to="/products" />}/>
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    );

}

export default App;

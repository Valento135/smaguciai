import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListOfItems from './pages/ListOfItemsPage/ListOfItems';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import './App.css';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ItemPage from './pages/ItemPage.tsx/ItemPage';
import { CartProvider } from './Context/CartContext';
import CartPage from './pages/CarPage/CartPage';
import React from 'react';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/List" element={<ListOfItems />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="Toys/:id" element={<ItemPage />} />
            <Route path="/Cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

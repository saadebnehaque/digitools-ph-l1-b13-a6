

import { useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner';
import Navbar from './components/Navbar/Navbar';
import PremiumDigitalTools from './components/PremiumDigitalTools/PremiumDigitalTools';
import Stats from './components/stats/Stats';
import { toast, ToastContainer } from 'react-toastify';



function App() {

  const [catrProducts, setCartProducts] = useState([]);
  const handleCartProducts = (product) => {
    const updatedCart = [...catrProducts, product];
    if (catrProducts.some(pro => pro.name === product.name)) {
      toast.error(`${product.name} is already in the cart`)
    } else {
      setCartProducts(updatedCart);
      toast.success(`${product.name} is successfully added to cart`);
    }
  }
  const handleRemove = (product) => {
    const updatedCart = catrProducts.filter(pro => pro.name !== product.name);
    setCartProducts(updatedCart);
    toast.warning(`${product.name} is removed from cart`);
  }
  return (
    <>
      <Navbar catrProducts={catrProducts}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <PremiumDigitalTools handleCartProducts={handleCartProducts} catrProducts={catrProducts} handleRemove={handleRemove}></PremiumDigitalTools>




      <ToastContainer></ToastContainer>
    </>
  )
}

export default App

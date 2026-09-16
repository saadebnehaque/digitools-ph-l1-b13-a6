

import { useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner';
import Navbar from './components/Navbar/Navbar';
import PremiumDigitalTools from './components/PremiumDigitalTools/PremiumDigitalTools';
import Stats from './components/stats/Stats';
import { Bounce, toast, ToastContainer } from 'react-toastify';



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

  const handleClearCart = () => {
    setCartProducts([]);
    toast.info(`Proceeding to checkout, your cart is cleared`);
  }


  const [isCart, setIsCart] = useState(false);




  return (
    <>
      <Navbar catrProducts={catrProducts} isCart={isCart} setIsCart={setIsCart}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <PremiumDigitalTools handleCartProducts={handleCartProducts} catrProducts={catrProducts} handleRemove={handleRemove} isCart={isCart} setIsCart={setIsCart} handleClearCart={handleClearCart}></PremiumDigitalTools>




      <ToastContainer
        position="bottom-right"
        transition={Bounce}
      ></ToastContainer>
    </>
  )
}

export default App

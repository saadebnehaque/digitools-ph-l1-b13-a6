

import { useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner';
import Navbar from './components/Navbar/Navbar';
import PremiumDigitalTools from './components/PremiumDigitalTools/PremiumDigitalTools';
import Stats from './components/stats/Stats';



function App() {

  const [catrProducts, setCartProducts] = useState([]);
  const handleCartProducts = (product) => {
    const updatedCart = [...catrProducts, product];
    setCartProducts(updatedCart);
  }
  console.log(catrProducts);
  return (
    <>
      <Navbar catrProducts={catrProducts}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <PremiumDigitalTools></PremiumDigitalTools>
    </>
  )
}

export default App

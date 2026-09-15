

import './App.css'
import Banner from './components/banner/Banner';
import Navbar from './components/Navbar/Navbar';
import PremiumDigitalTools from './components/PremiumDigitalTools/PremiumDigitalTools';
import Stats from './components/stats/Stats';



function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <PremiumDigitalTools></PremiumDigitalTools>
    </>
  )
}

export default App

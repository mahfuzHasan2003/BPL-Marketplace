import { useState } from 'react';
import './App.css'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer';
import SubscribeNewsletter from './Components/Footer/SubscribeNewsletter';
import HeaderBanner from './Components/Header/HeaderBanner/HeaderBanner';
import Navbar from './Components/Header/Navbar/Navbar';

function App() {
  const [coin, setCoin] = useState(0);
  const [available, setAvailable] = useState(true);
  const [selected, setSelected] = useState([]);
  
  return (
    <div className='space-y-8'>
        <Navbar coin={coin}></Navbar>
        <HeaderBanner setCoin={setCoin} coin={coin}></HeaderBanner> 
      <main className='w-11/12 max-w-7xl mx-auto space-y-8'>
        <Players available={available} setAvailable={setAvailable} selected={selected} setSelected={setSelected} coin={coin} setCoin={setCoin}></Players>
      </main>
      <footer className='relative'>
        <SubscribeNewsletter></SubscribeNewsletter>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
import { useState } from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer';
import SubscribeNewsletter from './Components/Footer/SubscribeNewsletter';

function App() {
  const [coin, setCoin] = useState(0);
  const [available, setAvailable] = useState(true);
  const [selected, setSelected] = useState([]);
  
  return (
    <div className='space-y-8'>
      <header className='w-11/12 max-w-7xl mx-auto space-y-8'>
        <Header coin={coin} setCoin={setCoin}></Header>
      </header> 
      <main className='w-11/12 max-w-7xl mx-auto space-y-8'>
        <Players available={available} setAvailable={setAvailable} selected={selected} setSelected={setSelected} coin={coin} setCoin={setCoin}></Players>
      </main>
      <footer>
        <SubscribeNewsletter></SubscribeNewsletter>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
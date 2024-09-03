import React from 'react'
import './App.css'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Shop } from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import { ShopContextProvider } from "./context/shop-context";
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <div className='app'>
      <ShopContextProvider>
           <Router>
           <Navbar/>
            <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/contact' element={<Contact/>} />
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
           </Router>
           </ShopContextProvider>
      </div>
     
       
    </>
  )
}

export default App

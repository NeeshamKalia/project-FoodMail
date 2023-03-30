import React from 'react';
import './App.css';
import cart from './images/cart.png'
import logo from './images/icon.webp'

const Header = () =>(
  <div className="header">
    <img src={logo} alt='logo'/>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
    <img src = {cart} alt='cart' />

  </div>
)

 function App() {
  return (
    <Header />
  )
}





export default App;
